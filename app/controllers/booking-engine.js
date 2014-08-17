angular.module('jmd.contollers', [])

.controller('jmdBookingEngineController',
['$location', '$scope', 'SharedResource',
    function ($location, $scope, SharedResource) {

    $scope.SharedResource = SharedResource;

    //kick the whole thing off
    $scope.SharedResource.getTrip($location.path().replace('/', ''));

    //$scope.$watch('SharedResource.formData',

    //function (newValue, oldValue) {
    //    // post back to server on every change?!
    //    var formData = angular.toJson($scope.SharedResource.formData);
    //    if (formData) {
    //        window.localStorage.setItem('ibe-data', formData);
    //    }
    //}, true);

    // write watchers for each page and validation?
    // page 1: country, trip, date, guests > 0
    // page 2: nothing
    // page 3: form valid
    // page 4: nothing
    // page 5: nothing

}]);