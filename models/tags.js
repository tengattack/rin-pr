"use strict";

/**
 * models/tags.js
 * Rin prpr!
 *
 * rin-pr Tags model
 */

var util = require('util'),
    validator = require('validator'),
    common = require('./../lib/common');
var ModelBase = require('./base');
var ObjectID = require('mongodb').ObjectID;

function Tags(tag) {
    ModelBase.call(this);

    if (tag) {
        if (tag._id) this._id = tag._id;
        if (tag.name) {
            this.name = validator.trim(tag.name);
        }
        this.type = tag.type;
        this.synonyms = tag.synonyms ? tag.synonyms : [];
        this.locale = tag.locale ? tag.locale : {};
        this.syn_lowercase = Tags.lowercaseArray(this.synonyms);
    }
}

util.inherits(Tags, ModelBase);

Tags.prototype.set = function (tag) {
    if (tag) {
        this._id = tag._id;
        this.name = tag.name;
        this.type = tag.type;
        this.synonyms = tag.synonyms;
        this.locale = tag.locale;
        this.syn_lowercase = tag.syn_lowercase;
    } else {
        this._id = this.name = this.type = this.synonyms =
            this.locale = this.syn_lowercase = undefined;
    }
};

Tags.prototype.valueOf = function () {
    return {
        _id: this._id,
        name: this.name,
        type: this.type,
        synonyms: this.synonyms,
        locale: this.locale,
        syn_lowercase: this.syn_lowercase
    };
};

Tags.prototype.matchTags = function *(tag_arr) {
    var arr_lowercase = Tags.lowercaseArray(tag_arr);
    return yield this.collection.find({ syn_lowercase: { $in: arr_lowercase } }).toArray();
};

Tags.prototype.searchByKeywords = function *(kw) {
    var k = kw.toLowerCase();
    var r = yield this.cache.get('keywords/' + k);
    if (r == null) {
        var kw_reg = common.preg_quote(k);
        var sregex = new RegExp(kw_reg);
        r = yield this.collection.find({ syn_lowercase: { $in: { $regex: sregex } } }).limit(8).toArray();
        yield this.cache.set('keywords/' + k, r);
    }
    return r;
};

Tags.prototype.valid = function () {
    if (typeof this.name == 'string'
        && this.synonyms instanceof Array) {
        var typeList = ['team', 'bangumi', 'lang', 'resolution', 'format', 'misc'];
        if (typeList.indexOf(this.type) < 0) {
            return false;
        }
        for (var i = 0; i < this.synonyms.length; i++) {
            this.synonyms[i] = validator.trim(this.synonyms[i]);
            if (!this.synonyms[i]) {
                return false;
            }
        }
        for (var k in this.locale) {
            if (this.synonyms.indexOf(this.locale[k]) < 0) {
                return false;
            }
        }
        return true;
    }
    return false;
};

Tags.prototype.ensureIndex = function () {
    var ge = this.collection.ensureIndex({ syn_lowercase: 1 },
        { unique: true, background: true, w: 1 });
    ge(function (err) {
        if (err) {
            console.log('Tags ensureIndex failed!');
        }
    });
};

Tags.prototype.save = function *() {

    var tag = {
        name: this.name,
        type: this.type,
        synonyms: this.synonyms,
        locale: this.locale
    };

    if (tag.synonyms.indexOf(tag.name) === -1) {
        // Add tag name itself to synonyms
        tag.synonyms.push(tag.name);
    }

    tag.syn_lowercase = Tags.lowercaseArray(tag.synonyms);

    var ts = yield this.collection.insert(tag, { safe: true });

    if (ts && ts[0]) {
        this.set(ts[0]);
        return ts[0];
    }
    return null;
};

Tags.prototype.getPopBangumi = function *() {
    var r = yield this.cache.get('pop');
    if (r === null) {
        r = yield this.collection.find({type: 'bangumi'}).limit(50).toArray();
        yield this.cache.set('pop', r);
    }
    return r;
};

Tags.prototype.getByType = function *(types) {
    var k = 'type/';
    if (types instanceof Array) {
        k += types.join();
    } else if (typeof types == 'string') {
        k += types;
    } else {
        return [];
    }
    var r = yield this.cache.get(k);
    if (r === null) {
        var q = (types instanceof Array) ? {type: {$in: types}} : {type: types};
        r = yield this.collection.find(q).toArray();
        yield this.cache.set(k, r);
    }
    return r;
};

Tags.prototype.getTeamInTags = function *(tag_ids) {
    var k = 'teams_tagin/' + tag_ids.join();
    var r = yield this.cache.get(k);
    if (r === null) {
        for (var i = 0; i < tag_ids.length; i++) {
            tag_ids[i] = new ObjectID(tag_ids[i]);
        }
        r = yield this.collection.find(
            {
                _id: { $in: tag_ids },
                type: 'team'
            },
            {
                _id: 1
            }
        ).toArray();
        yield this.cache.set(k, r);
    }
    return r;
};

Tags.lowercaseArray = function (arr) {
    var lowercaseArr = [];
    arr.forEach(function (a) {
        lowercaseArr.push(a.toLowerCase());
    });
    return lowercaseArr;
};

module.exports = Tags;

ModelBase.register('tags', Tags);
