module.exports = function (grunt) {

    grunt.initConfig({

        cssmin: {
            minify: {
                src: [
                    'css/src/normalize.css',
                    'css/src/main.css',
                    'css/src/*.css'],
                dest: 'css/main.min.css/'
            }
        },

        // angular unit tests
        karma: {
            unit: {
                configFile: 'app/tests/karma.conf.js'
            }
        },

        // template caching
        ngtemplates: {
            jmdApp: {
                src: 'app/templates/**/*.html',
                dest: 'app/templates/templates.js'
            }
        },

        // js syntax checking
        jshint: {
            all: ['app/**/*.js', '!app/tests/*.js']
        },

        // create a watcher for the above processes
        watch: {
            concat: {
                files: ['css/src/*.css'],
                tasks: ['cssmin'],
                options: {
                    livereload: true,
                }
            },
            jshint: {
                files: ['app/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true,
                }
            },
            ngtemplates: {
                files: ['app/templates/**/*.html'],
                tasks: ['ngtemplates'],
                options: {
                    livereload: true,
                }
            },
            karma: {
                files: ['app/**/*.js'],
                //tasks: ['clear', 'karma'],
                tasks: ['karma'],
                options: {
                    livereload: true,
                }
            }
        },


    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-clear');

    grunt.registerTask('default', ['watch']);

};