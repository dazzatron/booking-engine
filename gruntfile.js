module.exports = function (grunt) {

    grunt.initConfig({

        // sass/compass
        compass: {
            dev: {
                options: {
                    sassDir: 'css/src',
                    cssDir: 'css',
                    outputStyle: 'compressed'
                }
            }
        },

        // js concat
        uglify: {
            minify: {
                options: {
                    sourceMap: true
                },
                files: {
                    'main.min.js': ['js/vendor/angular.min.js', 'js/vendor/angular-route.min.js', 'js/vendor/angular-animate.min.js', 'js/vendor/angular-local-storage.min.js', 'app/app.js', 'app/controllers/*.js', 'app/directives/*.js', 'app/filters/*.js', 'app/services/*.js']
                }
            }
        },

        // angular unit tests
        //karma: {
        //    unit: {
        //        configFile: 'app/tests/karma.conf.js'
        //    }
        //},

        // template caching
        //ngtemplates: {
        //    jmdApp: {
        //        src: 'app/templates/**/*.html',
        //        dest: 'app/templates/templates.js'
        //    }
        //},

        // js syntax checking
        jshint: {
            all: ['app/**/*.js', '!app/tests/*.js']
        },

        nodemon: {
            dev: {
                script: 'server/server.js'
            }
        },

        // create a watcher for the above processes
        watch: {
            sass: {
                files: ['css/src/*.scss'],
                tasks: ['compass']
            },
            jshint: {
                files: ['app/**/*.js'],
                tasks: ['jshint']
            },
            uglify: {
                files: ['js/vendor/*.js', 'app/app.js', 'app/**/*.js'],
                tasks: ['uglify']
            },
            //ngtemplates: {
            //    files: ['app/templates/**/*.html'],
            //    tasks: ['ngtemplates'],
            //    options: {
            //        livereload: true,
            //    }
            //},
            //karma: {
            //    files: ['app/**/*.js'],
            //    //tasks: ['clear', 'karma'],
            //    tasks: ['karma'],
            //    options: {
            //        livereload: true,
            //    }
            //}
        },

        concurrent: {
            dev: [
                'nodemon',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    //grunt.loadNpmTasks('grunt-karma');
    //grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['concurrent']);

};