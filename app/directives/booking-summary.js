angular.module('jmd.bookingSummary', [])
  .directive('bookingSummary', ['$timeout', function ($timeout) {
      return {
          scope: {
              watch: '@'
          },
          link: function (scope, element, attrs) {

              var fixed = false;
              var windowHeight;
              var height;
              var top;

              // scroll function
              var scroll = function () {

                  // only if smaller than window
                  if (height < windowHeight && top < windowHeight) {

                      var windowTop = $(window).scrollTop();

                      // check, fix
                      if (windowTop > top) {
                          if (!fixed) {
                              fixed = true;
                              $(element).addClass('fixed');
                          }
                      } else {
                          if (fixed) {
                              fixed = false;
                              $(element).removeClass('fixed');
                          }
                      }

                  }

                  else {
                      // add functionality for small screens?
                      fixed = false;
                      $(element).removeClass('fixed');
                  }

              };

              // add scroller
              $(window).on('scroll.bookingSummary', function () {
                  scroll();
              });

              // reset
              $(window).on('resize.bookingSummary', function () {
                  windowHeight = $(window).height();
                  scroll();
              });

              // set values that change on trip change
              attrs.$observe('watch', function (val) {

                  if (val) {

                      // do we put these here!?
                      top = top || $(element).offset().top; // never needs to change
                      windowHeight = windowHeight || $(window).height(); // never needs to change

                      // if the model changes, the height changes, probably ;)
                      // timeout to allow DOM change
                      $timeout(function () {
                          height = $(element).outerHeight();
                      }, 0);

                  }

              });

              // clean up
              $scope.$on('$destroy', function () {
                  $(window).off('resize.bookingSummary');
                  $(window).on('scroll.bookingSummary');
              });

          }

      };

  }]);