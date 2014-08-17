angular.module('jmdApp', [
   'jmd.resources',
   'jmd.contollers',
   'jmd.filters',
   'jmd.pagination',
   'jmd.tripSelector',
   'jmd.dateSelector',
   'jmd.roomSelector',
   'ngAnimate'
]);

angular.module('jmdApp').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(false);
}]);