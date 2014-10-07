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
              var elem = $(element);
              var id = scope.$id;

              // scroll function
              var scroll = function () {

                  // only if smaller than window
                  if (height < windowHeight && top < windowHeight) {

                      var windowTop = $(window).scrollTop();

                      // check, fix
                      if (windowTop > top) {
                          if (!fixed) {
                              fixed = true;
                              elem.addClass('fixed');
                          }
                      } else {
                          if (fixed) {
                              fixed = false;
                              elem.removeClass('fixed');
                          }
                      }

                  }

                  else {
                      // add functionality for small screens?
                      fixed = false;
                      elem.removeClass('fixed');
                  }

              };

              // add scroller
              $(window).on('scroll.bookingSummary.' + id, function () {
                  scroll();
              });

              // reset
              $(window).on('resize.bookingSummary.' + id, function () {
                  windowHeight = $(window).height();
                  scroll();
              });

              // set values that change on trip change
              attrs.$observe('watch', function (val) {

                  if (val) {

                      // do we put these here!?
                      top = top || elem.offset().top; // never needs to change
                      windowHeight = windowHeight || $(window).height(); 

                      // if the model changes, the height changes, probably ;)
                      // timeout to allow DOM change
                      $timeout(function () {
                          height = elem.outerHeight();
                      }, 0);

                  }

              });

              // clean up jquery 
              scope.$on('$destroy', function () {
                  $(window).off('resize.bookingSummary.' + id);
                  $(window).off('scroll.bookingSummary.' + id);
              });

          }

      };

  }]);