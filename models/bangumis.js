"use strict";

/**
 * models/bangumis.js
 * Rin prpr!
 *
 * rin-pr Bangumis model
 */

var util = require('util'),
    validator = require('validator');
var ModelBase = require('./base');
var ObjectID = require('mongodb').ObjectID;


function Bangumis(bangumi) {
    ModelBase.call(this);

    if (bangumi) {
        if (bangumi._id) this._id = bangumi._id;
        if (bangumi.name) {
            this.name = validator.trim(bangumi.name);
        }
        if (bangumi.credit) {
            this.credit = validator.trim(bangumi.credit);
        }
        this.startDate = new Date(bangumi.startDate).getTime();
        this.endDate = new Date(bangumi.endDate).getTime();
        this.showOn = parseInt(bangumi.showOn);
        if (bangumi.tag_id) {
            this.tag_id = new ObjectID(bangumi.tag_id);
        }
        this.icon = bangumi.icon;
        this.cover = bangumi.cover;
    }
}

util.inherits(Bangumis, ModelBase);

Bangumis.prototype.set = function (bangumi) {
    if (bangumi) {
        this._id = bangumi._id;
        this.name = bangumi.name;
        this.credit = bangumi.credit;
        this.startDate = bangumi.startDate;
        this.endDate = bangumi.endDate;
        this.showOn = bangumi.showOn;
        this.tag_id = bangumi.tag_id;
        this.icon = bangumi.icon;
        this.cover = bangumi.cover;
    } else {
        this._id = this.name = this.credit = this.startDate
          = this.endDate = this.showOn = this.tag_id
          = this.icon = this.cover = undefined;
    }
};

Bangumis.prototype.valueOf = function () {
    return {
        _id: this._id,
        name: this.name,
        credit: this.credit,
        startDate: this.startDate,
        endDate: this.endDate,
        showOn: this.showOn,
        tag_id: this.tag_id,
        icon: this.icon,
        cover: this.cover
    };
};

Bangumis.prototype.save = function *() {
    var newBgm = {
        name: this.name,
        credit: this.credit,
        startDate: this.startDate,
        endDate: this.endDate,
        showOn: this.showOn,
        tag_id: this.tag_id,
        icon: this.icon,
        cover: this.cover
    };

    var t = yield this.collection.insert(newBgm, { safe: true });
    if (t && t[0]) {
        return t[0];
    }
    return null;
};

Bangumis.prototype.getRecent = function *() {
    var day = new Date().getDay();
    var today = new Date().getTime();
    var r = yield this.cache.get('recent');
    if (r === null) {
        var days = [day - 2, day - 1, day, day + 1];
        for (var i = 0; i < days.length; i++) {
            if (days[i] < 0) {
                days[i] += 7;
            }
            if (days[i] > 6) {
                days[i] -= 7;
            }
        }
        r = yield this.collection.find({
            $in: days,
            startDate: { $lte: today },
            endDate: { $gte: today }
        }).toArray();
        yield this.cache.set('recent', r);
    }
    return r;
};

Bangumis.prototype.getCurrent = function *() {
    var today = new Date().getTime();
    var r = yield this.cache.get('current');
     if (r === null) {
        r = yield this.collection.find({
            startDate: { $lte: today },
            endDate: { $gte: today }
        }).toArray();
        yield this.cache.set('current', r);
    }
    return r;
};

Bangumis.prototype.getByName = function *(name) {
    return yield this.collection.findOne({name: name});
};

Bangumis.prototype.getByTagId = function *(tag_id) {
    return yield this.collection.findOne({tag_id: new ObjectID(tag_id)});
};

module.exports = Bangumis;

ModelBase.register('bangumis', Bangumis);
