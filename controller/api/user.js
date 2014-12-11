var validator = require('validator');
var Models = require('./../../models'),
    Users = Models.Users;

var hat = require('hat');

var config = require('./../../config');
var mailer = require('./../../lib/mailer');

module.exports = function (api) {

    api.post('/user/check', function *(next) {
        var body = this.request.body;
        //password already md5
        if (body && body.username && body.password && body.email) {
            var user = new Users({
                username: body.username,
                password: body.password,
                email: body.email
            }, false);
            if (user.valid()) {
                var result = {};
                result.valid = true;
                result.exists = yield user.exists();
                this.body = result;
                return;
            }
        }
        this.body = {valid: false};
    });

    api.post('/user/register', function *(next) {
        var body = this.request.body;
        var localeStr = this.request.headers.cookie.match(/locale=\%22([a-z_]+?)\%22/);
        var locale = 'en';
        if (localeStr && localeStr[1]) {
            locale = localeStr[1];
        }
        //password already md5
        if (body && body.username && body.password && body.email) {
            var activateKey = hat();
            var user = new Users({
                username: body.username,
                password: body.password,
                email: body.email,
                activateKey: activateKey
            }, false);
            if (user.valid()) {
                var isexists = yield user.exists();
                if (!isexists) {
                    var count = yield user.count();
                    if (count <= 0) {
                        //make the first user is admin
                        user.group = 'admin';
                    }
                    var u = yield user.save();
                    if (u) {
                        var locals = {
                            username: user.username,
                            activationUrl: config['app'].api_domain_prefix + '/api/user/activate/' + activateKey
                        };
                        var mailresult = yield mailer(user.email, locale, 'reg_confirmation', locals);
                        var uv = user.expose();
                        console.log('e')
                        this.session.user = uv;
                        this.body = {success: true, user: uv};
                        return;
                    }
                }
            }
        }
        this.body = {success: false};
    });

    api.post('/user/signin', function *(next) {
        var body = this.request.body;
        if (body && body.username && body.password) {
            var user = new Users();
            var u = yield user.getByUsername(body.username);
            if (u) {
                if (user.checkPassword(body.password, false)) {
                    this.body = {success: true, user: user.expose()};
                    this.session.user = user.valueOf();
                    return;
                }
            }
        }
        this.body = {success: false};
    });

    api.delete('/user/signout', function *(next) {
        this.session = null;
        this.user = null;
        this.body = {success: true};
    });

    api.get('/user/session', function *(next) {
        if (this.session.user && this.user) {
            this.body = this.user.expose();
        } else {
            this.body = {};
        }
    });

    api.post('/user/fetch', function *(next) {
        var body = this.request.body;
        if (body) {
            var u = new Users();
            if (body._ids && body._ids instanceof Array) {
                var us = yield u.find(body._ids);
                this.body = Users.filter(us);
                return;
            } else if (body._id && validator.isMongoId(body._id)) {
                if (yield u.find(body._id)) {
                    this.body = u.expose();
                } else {
                    this.body = {};
                }
                return;
            }
        }
        this.body = '';
    });

    api.get('/user/activate/:key', function *(next) {
        var activateKey = this.params.key;
        var user = new Users();
        var u = yield user.getByActivateKey(activateKey);
        if (u) {
            yield u.activate();
            this.redirect('/');
        } else {
            this.response.status=(400);
            this.redirect('/');
        }
    });

    api.post('/user/reset-password/request', function *(next) {
        var body = this.request.body;
        var cookies = this.request.headers.cookie;
        var localeStr = cookies.match(/locale=\%22([a-z_]+?)\%22/);
        var locale = 'en';
        if (localeStr && localeStr[1]) {
            locale = localeStr[1];
        }
        if (body && body.username && body.email) {
            var u = new Users().getByUsername(body.username);
            if (!u || u.email !== body.email) {
                this.status = 403;
                return;
            }
            var resetTime = new Date().getTime(),
                resetKey = hat();
            var resetLink = config['web'].web_domain_prefix + '/user/reset-password/' + resetKey;
            yield u.update({ resetTime: resetTime, resetKey: resetKey });
            this.body = yield mailer(u.email, locale, 'reset_password', { username: u.username, resetLink: resetLink })
        }
    });

    api.post('/user/reset-password', function *(next) {
        var resetKey = this.request.body.resetKey;
        var password = this.request.body.password;
        var now = new Date().getTime();
        if (resetKey && password) {
            var u = yield new Users().getByResetKey(resetKey, now);
            if (u) {
                var salt = hat(32, 36);
                yield u.update({ password: Users.hash_password(password, salt, false), salt: salt ,resetKey: null });
                return { success: true };
            } else {
                return { success: false };
            }
        }
    });
};
