angular.module('jmdApp', [
   'LocalStorageModule',
   'ngRoute',
   'jmd.resources',
   'jmd.controllers',
   'jmd.filters',
   'jmd.tripSelector',
   'jmd.dateSelector',
   'jmd.dateSummary',
   'jmd.roomSelector',
   'jmd.tourSelector',
   'ngAnimate'
])

.config(['$routeProvider',

  function ($routeProvider) {

      $routeProvider.
      when('/:tripName/select', {
          templateUrl: 'app/partials/select.html'
      }).
      when('/:tripName/extras', {
          templateUrl: 'app/partials/extras.html'
      }).
      when('/:tripName/guests', {
          templateUrl: 'app/partials/guests.html'
      }).
      when('/:tripName/payment', {
          templateUrl: 'app/partials/payment.html'
      }).
      when('/:tripName/confirmation', {
          templateUrl: 'app/partials/confirmation.html'
      }).
      otherwise({
          redirectTo: '/passport-to-the-world/select'
      });

  }]);