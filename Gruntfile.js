module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [
                    "public/bower_components/angular/angular.min.js",
                    "public/bower_components/angular-aria/angular-aria.js",
                    "public/bower_components/hammerjs/hammer.js",
                    "public/bower_components/ngprogress/build/ngProgress.min.js",
                    "public/bower_components/angular-ui-router/release/angular-ui-router.min.js",
                    "public/bower_components/angular-material/angular-material.min.js",
                    "public/bower_components/angular-cookies/angular-cookies.min.js",
                    "public/bower_components/angular-translate/angular-translate.min.js",
                    "public/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js",
                    "public/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
                    "public/bower_components/angular-animate/angular-animate.min.js",
                    "public/bower_components/angular-md5/angular-md5.min.js",
                    "public/bower_components/moment/min/moment-with-locales.min.js",
                    "public/bower_components/angular-moment/angular-moment.min.js",
                    "public/bower_components/angular-redactor/angular-redactor.js",
                    "public/bower_components/jquery/dist/jquery.min.js",
                    "public/bower_components/redactor/redactor.js",
                    "public/bower_components/redactor/plugins/fontcolor.js",
                    "public/bower_components/redactor/plugins/imagemanager.js",
                    "public/bower_components/redactor/langs/zh_tw.js",
                    "public/bower_components/redactor/langs/zh_cn.js",
                    "public/bower_components/angular-disqus/angular-disqus.js",
                    "public/bower_components/timelinejs/build/js/storyjs-embed.js",
                    "public/bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js",
                    "public/rin.js",
                    "public/rin-jq.js"
                ],
                dest: 'public/scripts/rin.pr.js'
            }
        },
        concat_css: {
            options: {
            },
            all: {
                src: [
                    "public/bower_components/ngprogress/ngProgress.css",
                    "public/bower_components/angular-material/angular-material.min.css",
                    "public/bower_components/angular-material/themes/red-theme.css",
                    "public/bower_components/angular-material/themes/pink-theme.css",
                    "public/bower_components/angular-material/themes/deep-orange-theme.css",
                    "public/bower_components/angular-material/themes/purple-theme.css",
                    "public/bower_components/fontawesome/css/font-awesome.min.css",
                    "public/bower_components/redactor/redactor.css",
                    "public/bower_components/angular-bootstrap-datetimepicker/src/css/datetimepicker.css",
                    "public/styles/style.css"
                ],
                dest: "public/styles/app.css"
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            compress: {
                files: {
                    'public/styles/app.min.css': [
                        "public/styles/app.css"
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            release: {
                options: {
                    mangle: true,
                    report: 'min',
                },
                files: {
                    'public/scripts/rin.pr.min.js': [
                        "public/scripts/rin.pr.js"
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('css', ['concat_css', 'cssmin']);
};
