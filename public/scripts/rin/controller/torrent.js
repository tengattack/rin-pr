
rin
.controller('TorrentShowCtrl', [
    '$state',
    '$stateParams',
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    '$mdDialog',
    'ngProgress',
    function ($state, $stateParams, $scope, $rootScope, $location, $http, $mdDialog, ngProgress) {
        var torrent_id = $stateParams.torrent_id;
        if (!torrent_id) {
            $location.path('/');
            return;
        }
        $http.post('/api/torrent/fetch', {_id: torrent_id}, {responseType: 'json'})
            .success(function (data, status) {
                if (data) {
                    var torrent = data;
                    $rootScope.fetchTorrentUserAndTeam([torrent], function () {
                        ngProgress.complete();
                    });
                    $rootScope.showTorrentDetailsDialog(null, torrent, function () {
                        if ($state.current && $state.current.name == 'torrent') {
                            $location.path('/');
                        }
                    });
                } else {
                    ngProgress.complete();
                }
            })
            .error(function (data, status) {
                ngProgress.complete();
            });
    }
])
.controller('TorrentPublishCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    '$filter',
    '$http',
    '$timeout',
    '$mdDialog',
    '$mdToast',
    '$q',
    'user',
    'torrent',
    'ngProgress',
    function ($scope, $rootScope, $state, $filter, $http, $timeout, $mdDialog, $mdToast, $q, user, torrent, ngProgress) {
        var ja = JobActionsWrapper($scope, ngProgress);
        $scope.user = user;
        $scope.tags = [];
        $scope.categoryTags = [];
        $http.get('/api/tag/misc', {responseType: 'json'})
            .success(function (data) {
                if (data && data.length) {
                    $scope.categoryTags = data;
                    $scope.categoryTag = data[0];
                    for (var i = 0; i < data.length; i++) {
                        if (torrent) {
                            if (data[i]._id == torrent.category_tag_id) {
                                $scope.categoryTag = data[i];
                                break;
                            }
                        } else if (data[i].name.toLowerCase() == 'donga') {
                            $scope.categoryTag = data[i];
                            break;
                        }
                    }
                }
            });

        if (torrent) {
          $scope.torrent = torrent;
          if (torrent.tag_ids && torrent.tag_ids.length > 0) {
            $rootScope.fetchTags(torrent.tag_ids, function (err, tags) {
              if (tags) {
                $scope.tags = tags;
              }
            });
          }
        } else {
          $scope.torrent = {};
        }

        $http.get('/api/team/myteam', {responseType: 'json'})
            .success(function (data) {
              if (data && data.length > 0) {
                $scope.teams = data;

                var tag_ids = [];
                for (var i = 0; i < data.length; i++) {
                  if (data[i].tag_id) {
                    tag_ids.push(data[i].tag_id);
                  }
                }
                $rootScope.fetchTags(tag_ids, true, function (err, _tags) {
                  if (_tags) {
                    data.forEach(function (t, i) {
                      if (t.tag_id) {
                        data[i].tag = _tags[t.tag_id];
                      }
                    });
                  }
                });

              }

              if ($scope.teams) {
                if (torrent) {
                    if (torrent.team_id) {
                      $scope.selectTeamByTeamId(torrent.team_id);
                    }
                } else {
                    $scope.selectTeam(0);
                }
              }
            });

        $scope.selectTeamByTeamId = function (team_id) {
          for (var i = 0; i < $scope.teams.length; i++) {
            if ($scope.teams[i]._id == team_id) {
              $scope.selectTeam(i);
              return i;
            }
          }
          return -1;
        };
        $scope.selectedTeamIndex = -1;
        $scope.selectTeam = function (i) {
          if ($scope.selectedTeamIndex == i) {
            return;
          }
          $scope.selectedTeamIndex = i;
          if (i >= 0) {
            $scope.team = $scope.teams[i];
            $scope.torrent.inteam = true;
            $scope.torrent.team_id = $scope.team._id;
          } else {
            $scope.team = null;
            $scope.torrent.inteam = false;
            $scope.torrent.team_id = '';
          }
        };

        $scope.delete = function (ev) {
            if (!ja.reset()) {
                return;
            }

            if ($rootScope.removeTorrent(ev, $scope.torrent, function (err) {
                if (!err) {
                    ja.succeed();
                    $mdDialog.hide();
                } else {
                    ja.fail();
                }
            })) {
              ja.start();
            }
        };

        $scope.publish = function () {
            if (!ja.reset()) {
                return;
            }
            if ($scope.categoryTag && $scope.torrent.title && $scope.torrent.introduction
                && $scope.torrent.title.length < 128) {
                if (!$scope.torrent._id && !$scope.torrent_file) {
                    return;
                }

                ja.start();
                var nt = {
                    category_tag_id: $scope.categoryTag._id,
                    title: $scope.torrent.title,
                    introduction: $scope.torrent.introduction,
                    tag_ids: [],
                    btskey: $scope.torrent.btskey
                    //, inteam: $scope.torrent.inteam ? '1' : ''
                };
                if ($scope.torrent.team_id) {
                  nt.team_id = $scope.torrent.team_id;
                }
                for (var j = 0; j < $scope.tags.length; j++) {
                    nt.tag_ids.push($scope.tags[j]._id);
                }
                var apiUrl;
                if ($scope.torrent._id) {
                    apiUrl = '/api/torrent/update';
                    nt._id = $scope.torrent._id;
                } else {
                    apiUrl = '/api/torrent/add';
                    if ($scope.torrent.teamsync) {
                        nt.teamsync = '1';
                    }
                    nt.file = $scope.torrent_file;
                }
                $http.post(apiUrl, nt, {cache: false, responseType: 'json'})
                    .success(function (data, status) {
                        if (data && data.success) {
                            ja.succeed();
                            $mdDialog.hide(data.torrent);
                        } else {
                            var msg;
                            if (data && data.message) {
                                msg = $filter('translate')(data.message);
                            }
                            ja.fail(msg);
                        }
                    })
                    .error(function (data, status) {
                        ja.fail();
                    });
            }
        };
        $scope.removeTag = function (i) {
            $scope.tags.splice(i, 1);
        };
        $scope.addTag = function (i) {
            if ($scope.newtag) {
                $scope.working = true;
                $http.post('/api/tag/search', {name: $scope.newtag}, {cache: false, responseType: 'json'})
                    .success(function (data) {
                        $scope.working = false;
                        if (data && data.found && data.tag) {
                            var found = false;
                            for (var j = 0; j < $scope.tags.length; j++) {
                                if ($scope.tags[j]._id == data.tag._id) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                $scope.tags.push(data.tag);
                            }
                            $scope.newtag = '';
                        }
                    })
                    .error(function () {
                        $scope.working = false;
                    });
            }
        };
        $scope.contentSuggest = function () {
            if ($scope.torrent.title) {
                $scope.working = true;
                $http.post('/api/torrent/suggest', {
                    title: $scope.torrent.title,
                    team_id: $scope.torrent.team_id
                }, {cache: false, responseType: 'json'})
                    .success(function (data) {
                        $scope.working = false;
                        if (data && data._id) {
                            if (data.teamsync) {
                                $scope.torrent.teamsync = true;
                            }
                            if (data.team_id) {
                                $scope.torrent.inteam = true;
                            }
                            $scope.torrent.introduction = data.introduction;
                            var ts = data.tag_ids;
                            if (ts && ts.length > 0) {
                                var newTagIds = [];
                                for (var i = 0; i < ts.length; i++) {
                                    var found = false;
                                    for (var j = 0; j < $scope.tags.length; j++) {
                                        if ($scope.tags[j]._id == ts[i]) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        newTagIds.push(ts[i]);
                                    }
                                }
                                if (newTagIds.length > 0) {
                                    $rootScope.fetchTags(newTagIds, function (err, tags) {
                                        if (tags && tags.length > 0) {
                                            var stags = [];
                                            for (var i = 0; i < tags.length; i++) {
                                                if (tags[i].type == 'misc') {
                                                    continue;
                                                } else if (tags[i].type == 'resolution' || tags[i].type == 'lang') {
                                                    //only have one
                                                    var found = false;
                                                    for (var j = 0; j < $scope.tags.length; j++) {
                                                        if ($scope.tags[j].type == tags[i].type) {
                                                            found = true;
                                                            break;
                                                        }
                                                    }
                                                    if (!found) {
                                                        stags.push(tags[i]);
                                                    }
                                                } else {
                                                    stags.push(tags[i]);
                                                }
                                            }
                                            if (stags.length > 0) {
                                                $scope.tags = $scope.tags.concat(stags);
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    })
                    .error(function () {
                        $scope.working = false;
                    });
            }
        };
        $scope.getSuggest = function () {
            if ($scope.torrent.title) {
                $scope.working = true;
                $http.post('/api/tag/suggest', {query: $scope.torrent.title}, {
                    cache: false,
                    responseType: 'json'
                })
                    .success(function (data) {
                        $scope.working = false;
                        if (data && data.length > 0) {
                            for (var i = 0; i < data.length; i++) {
                                var ftags = null;
                                var found = false;
                                var j;
                                if (data[i].type == 'misc') {
                                    ftags = $scope.categoryTags;
                                } else {
                                    ftags = $scope.tags;
                                }
                                for (j = 0; j < ftags.length; j++) {
                                    if (ftags[j]._id == data[i]._id) {
                                        found = true;
                                        break;
                                    }
                                }
                                if (data[i].type == 'misc') {
                                    if (found) {
                                        $scope.categoryTag = ftags[j];
                                    }
                                } else {
                                    if (!found) {
                                        $scope.tags.push(data[i]);
                                    }
                                }
                            }
                        }
                    })
                    .error(function () {
                        $scope.working = false;
                    });
            }
        };
        $scope.close = function () {
            $mdDialog.cancel();
        };
        //TODO: use onblur to instead
        var lastTimeout = null;
        $scope.$watch("torrent.title", function (newValue, oldValue) {
            if (lastTimeout) $timeout.cancel(lastTimeout);
            lastTimeout = $timeout($scope.getSuggest, 2000);
        });

        $scope.addKeywordsTag = function (i) {
            if ($scope.keywordsTags && $scope.keywordsTags[i]) {
                var tag = $scope.keywordsTags[i];
                var found = false;
                for (var j = 0; j < $scope.tags.length; j++) {
                    if ($scope.tags[j]._id == tag._id) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    $scope.tags.push(tag);
                }
            }
        };

        $scope.canceler = null;
        $scope.$watch('newtag', function (newValue, oldValue) {
            if ($scope.canceler) {
                $scope.canceler.resolve();
            }
            var tagname = newValue;
            if (tagname && tagname.length >= 2) {
                $scope.canceler = $q.defer();
                $http.post('/api/tag/search',
                    {name: tagname, keywords: true, multi: true},
                    {responseType: 'json', timeout: $scope.canceler.promise})
                    .success(function (data) {
                        if (data && data.found) {
                            $scope.keywordsTags = data.tag;
                        } else {
                            $scope.keywordsTags = null;
                        }
                        $scope.canceler = null;
                    })
                    .error(function () {
                        $scope.canceler = null;
                    });
            } else {
                $scope.keywordsTags = null;
            }
        });
    }
])
.controller('TorrentDetailsCtrl', [
    '$scope',
    '$rootScope',
    '$http',
    '$timeout',
    '$mdDialog',
    '$window',
    'torrent',
    'ngProgress',
    function ($scope, $rootScope, $http, $timeout, $mdDialog, $window, torrent, ngProgress) {
        $scope.lang = $rootScope.lang;
        $scope.torrent = torrent;
        $scope.user = $rootScope.user;
        //$scope.fileContainer = false;
        $scope.showComments = false;
        $scope.showSyncStatus = false;
        $timeout(rejustifyImagesInTorrentDetails, 500);
        if (torrent.content && torrent.content.length <= 1) {
            $scope.fileContainer = true;
        }
        if (torrent.tag_ids && torrent.tag_ids.length > 0) {
            $rootScope.fetchTags(torrent.tag_ids, function (err, tags) {
                if (tags) {
                    $scope.torrent.tags = tags;
                }
            });
        }
        $scope.downloadTorrent = $rootScope.downloadTorrent;

        var user = $scope.user;
        if (user) {
          $scope.canEdit = (user._id == torrent.uploader_id)
            || user.group == 'admin' || user.group == 'staff';
          if (!$scope.canEdit && torrent.team) {
            var team = torrent.team;
            if (team.admin_ids && team.admin_ids.indexOf(user._id) !== -1) {
              $scope.canEdit = true;
            } else if (team.editor_ids && team.editor_ids.indexOf(user._id) !== -1) {
              $scope.canEdit = true;
            }
          }
        }

        $scope.edit = function (ev) {
            $rootScope.editTorrent(ev, $scope.torrent, $scope.user, function () {
            });
        };
        $scope.close = function () {
            $mdDialog.cancel();
        };
    }
]);
