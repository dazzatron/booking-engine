angular.module('jmd.contollers', [])

.controller('jmdBookingEngineController',
['$location', '$scope', 'SharedResource',
    function ($location, $scope, SharedResource) {

    $scope.SharedResource = SharedResource;

    //kick the whole thing off
    $scope.SharedResource.getTrip($location.path().replace('/', ''));

}]);