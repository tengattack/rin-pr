"use strict";

/**
 * controller/api/bangumi.js
 * Rin prpr!
 *
 * bangumi api controller
 */

var Models = require('./../../models'),
    Files = Models.Files,
    Tags = Models.Tags,
    Bangumis = Models.Bangumis;

var validator = require('validator');

module.exports = function (api) {

    api.get('/bangumi/timeline', function *(next) {
        /*
            TODO: timeline

            return recent days bangumis

            asset refer hot resource
                media refer to its poster
                credit refer to its subs' name

            headline refer to bangumi's name
            text refer to ?

            remove main headline/asset?
        */
        var rbgms = yield new Bangumis().getRecent();
        var dbgms = [];
        var now = new Date();
        var wday = now.getDay();
        var weekStartDate = now.getDate() - wday;
        rbgms.forEach(function (bgm) {
            var date = new Date();
            date.setDate(weekStartDate + (bgm.showOn));
            var sdate = date.toDateString();

            var tldate = timelineDateTime(bgm.startDate, sdate);

            dbgms.push({
                startDate: tldate,
                endDate: tldate,
                headline: "<a href=\"#!/tag/" + bgm.tag_id + "\">" + bgm.name + "</a>",
                asset: {
                    media: bgm.cover,
                    thumbnail: bgm.icon,
                    credit: bgm.credit
                }
            });
        });

        this.body = { "timeline": {
            "type": "default",
            "date": dbgms
        }};
    });

    api.get('/bangumi/current', function *(next) {
        this.body = yield new Bangumis().getCurrent();
    });

    api.get('/bangumi/recent', function *(next) {
        this.body = yield new Bangumis().getRecent();
    });

    api.get('/bangumi/all', function *(next) {
        this.body = yield new Bangumis().getAll();
    });

    api.post('/bangumi/add', function *(next) {
        if (this.user && this.user.isAdmin()) {
            var body = this.request.body;
            var files = this.request.files;
            if (isValid(body, files)) {
                var tag = new Tags({name: body.name});
                //TODO: check Date type
                body.startDate = parseInt(body.startDate);
                body.endDate = parseInt(body.endDate);
                var nb = {
                    name: body.name,
                    credit: body.credit,
                    startDate: body.startDate,
                    endDate: body.endDate,
                    showOn: body.showOn
                };
                if (tag.valid()) {
                    var t = yield tag.save();
                    if (t) {
                        nb.tag_id = t._id;

                        var f1 = new Files();
                        var f2 = new Files();
                        f1.load('image', files.icon, this.user._id);
                        f2.load('image', files.cover, this.user._id);

                        if (f1.valid() && f2.valid()) {
                            var file1 = yield f1.save();
                            var file2 = yield f2.save();
                            if (file1 && file2) {
                                nb.icon = file1.savepath;
                                nb.cover = file2.savepath;
                            }
                        }

                        var bangumi = new Bangumis(nb);
                        var b = yield bangumi.save();
                        if (b) {
                            this.body = { success: true, bangumi: b };
                            return;
                        }
                    }
                }
            }
        }
        this.body = { success: false };
    });

    api.post('/bangumi/update', function *(next) {
        if (this.user && this.user.isAdmin()) {
            var body = this.request.body;
            var files = this.request.files;
            if (isValid(body) && validator.isMongoId(body._id)) {
                //TODO: check Date type
                body.startDate = parseInt(body.startDate);
                body.endDate = parseInt(body.endDate);
                var nb = {
                    name: body.name,
                    credit: body.credit,
                    startDate: body.startDate,
                    endDate: body.endDate,
                    showOn: body.showOn
                };
                if (files && files.icon) {
                    var f1 = new Files();
                    f1.load('image', files.icon, this.user._id);
                    if (f1.valid()) {
                        var file1 = yield f1.save();
                        if (file1) {
                            nb.icon = file1.savepath;
                        }
                    }
                }
                if (files && files.cover) {
                    var f2 = new Files();
                    f2.load('image', files.cover, this.user._id);
                    if (f2.valid()) {
                        var file2 = yield f2.save();
                        if (file2) {
                            nb.cover = file2.savepath;
                        }
                    }
                }

                var bangumi = new Bangumis({_id: body._id});
                var b = yield bangumi.find();
                if (b) {
                    if (b.name != body.name) {
                        //Name change, and we need change tag
                        if (b.tag_id) {
                            var tag = new Tags({_id: b.tag_id});
                            var t = yield tag.find();
                            if (t) {
                                var i = tag.synonyms.indexOf(tag.name);
                                if (i >= 0) {
                                    tag.synonyms.splice(i, 1);
                                }
                                tag.name = body.name;
                                tag.synonyms.push(body.name);
                                yield tag.update();
                            }
                        }
                    }
                    b = yield bangumi.update(nb);
                    if (b) {
                        this.body = { success: true };
                        return;
                    }
                }
            }
        }
        this.body = { success: false };
    });

    api.post('/bangumi/remove', function *(next) {
        if (this.user && this.user.isAdmin()) {
            var body = this.request.body;
            yield new Bangumis().remove(body._id);
            this.body = { success: true };
            return;
        }
        this.body = { success: false };
    });

    api.post('/bangumi/search', function *(next) {
        var body = this.request.body;
        if (body && body.name) {
            body.name = validator.trim(body.name);
            if (body.name) {
                var t = yield new Bangumis().getByName(body.name);
                if (t) {
                    this.body = {success: true, found: true, bangumi: t};
                } else {
                    this.body = {success: true, found: false};
                }
                return;
            }
        }
        this.body = {success: false};
    });

    api.post('/bangumi/fetch', function *(next) {
        var body = this.request.body;
        if (body) {
            if (body._ids && body._ids instanceof Array) {
                this.body = yield new Bangumis().find(body._ids);
                return;
            } else if (body._id && validator.isMongoId(body._id)) {
                this.body = yield new Bangumis().find(body._id);
                return;
            }
        }
        this.body = '';
    });
};

var isValid = function(bangumi, files) {
    bangumi.name = validator.trim(bangumi.name);
    bangumi.showOn = parseInt(bangumi.showOn);
    if (validator.isDate(bangumi.startDate) && validator.isDate(bangumi.endDate)) {
        return false;
    }
    //0 stand for Sunday
    if ([0, 1, 2, 3, 4, 5, 6].indexOf(bangumi.showOn) === -1) {
        return false;
    }
    if (typeof bangumi.name !== 'string' || !bangumi.name) {
        return false;
    }
    /* No need for create new bangumi
    if (!bangumi.tag_id || validator.isMongoId(bangumi.tag_id)) {
        return false;
    }*/
    if (files && (!files.cover || !files.icon)) {
        return false;
    }
    return true;
};

var timelineDateTime = function(startDate, sdate) {
    /*
    * startDate: bangumi.startDate should be a exact Date object (timestamp) of the first showTime begin
    * endDate: bangumi.endDate should be a exact Date object (timestamp) of the last showTime end
    * sdate: a Date object of most recent show date
    *
    * ok i give up. dont know how to calculate a bangumi that cross the night without add new property to bangumis model.
    * */

    sdate = new Date(sdate);
    var startTime = new Date(startDate);
    var startDateString = sdate.getFullYear() + ',' + (sdate.getMonth() + 1) + ',' + sdate.getDate();

    return startDateString + ',' + startTime.getHours() + ',' + startTime.getMinutes()
};
