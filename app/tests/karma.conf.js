module.exports = function (config) {

  config.set({

    basePath : '../../app/',

    files: [
      '../../js/vendor/jquery-1.9.1.min.js',
      '../../js/vendor/angular.min.js',
      '../../js/vendor/angular-mocks.js',
      '../../js/vendor/*.js',
      'app.js',
      'templates/*.js',
      'services/*.js',
      'filters/*.js',
      'controllers/*.js',
      'directives/*.js',
      'tests/**/*.js'
    ],

    //autoWatch: true,    
      
    singleRun: true,

    frameworks: ['jasmine'],

    browsers: [
        'PhantomJS'//,
        //'Chrome'//,
        //'Firefox'
    ],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });

};