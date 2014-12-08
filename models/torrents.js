
var util = require('util'),
    fs = require('fs'),
    validator = require('validator'),
    parseTorrent = require('parse-torrent');
var ModelBase = require('./base');
var ObjectID = require('mongodb').ObjectID;

const onePage = 30;

function Torrents(torrent) {
    ModelBase.call(this);

    if (torrent) {
        if (torrent._id) this._id = torrent._id;
        if (torrent.title) {
            this.title = validator.trim(torrent.title);
        }
        this.introduction = torrent.introduction;
        this.tags = torrent.tags;   //tags id
        if (torrent.bangumi_id) {
            this.bangumi_id = new ObjectID(torrent.bangumi_id);
        }
        //downloads
        //finished
        //leechers
        //seeders
        if (this.uploader_id) {
            this.uploader_id = new ObjectID(torrent.uploader_id);
        }
        if (this.team_id) {
            this.team_id = new ObjectID(torrent.team_id);
        }
        //publish_time
        this.magnet = torrent.magnet;
        if (this.file_id) {
            this.file_id = new ObjectID(torrent.file_id);
        }
        this.content = torrent.content;
    }
}

util.inherits(Torrents, ModelBase);

Torrents.parseTorrent = function *(torrentPath) {
    var readFile = function (file) {
        return function (callback) {
            fs.readFile(file, callback);
        };
    };
    return parseTorrent(yield readFile(torrentPath));
};

Torrents.prototype.set = function (t) {
    if (t) {
        this._id = t._id;
        this.title = t.title;
        this.introduction = t.introduction;
    } else {
        this._id = this.title = this.introduction = undefined;
    }
    return u;
};

Torrents.prototype.valueOf = function () {
    return {
        _id: this._id,
        title: this.title,
        introduction: this.introduction,
        tags: this.tags,
        uploader_id: this.uploader_id,
        team_id: this.team_id,
        magnet: this.magnet,
        file_id: this.file_id,
        content: this.content,
    };
};

Torrents.prototype.save = function *() {
    var t = {
        title: this.title,
        introduction: this.introduction,
        tags: this.tags,
        downloads: 0,
        finished: 0,
        leechers: 0,
        seeders: 0,
        uploader_id: this.uploader_id,
        team_id: this.team_id,
        publish_time: new Date(),
        file_id: this.file_id,
        content: this.content,
    };
    return yield this.collection.save(t);
};

Torrents.prototype.getPageCount = function *() {
    return (yield this.count()) / onePage;
};

Torrents.prototype.getByPage = function *(page) {
    if (page <= 0) {
        return [];
    }
    page--; //for index
    return yield this.collection.find({})
        .sort({publish_time: -1}).skip(page * onePage).limit(onePage).toArray();
};

module.exports = Torrents;

ModelBase.register('torrents', Torrents);
