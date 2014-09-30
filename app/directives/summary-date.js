angular.module('jmd.dateSummary', [])
  .directive('jmdDate', function () {
      return {
          templateUrl: 'app/templates/summary-date/summary-date.html',
          scope: {
              dateCode: '@'
          },
          link: function (scope, element, attrs) {

              attrs.$observe('dateCode', function (val) {
                  if (!val) {
                      console.error("no date code specified");
                  }
              });

              attrs.$observe('dayDiff', function (val) {
                  if (val) {
                      scope.dateCode = Number(scope.dateCode) + (Number(val) * 86400000); // seconds in a day
                  }
              });

          }
      };
  });