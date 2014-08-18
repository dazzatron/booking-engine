angular.module('jmd.contollers', [])

.controller('jmdBookingEngineController',
['$location', '$scope', 'SharedResource',
    function ($location, $scope, SharedResource) {

    $scope.SharedResource = SharedResource;

    //kick the whole thing off
    $scope.SharedResource.getTrip($location.path().replace('/', ''));

    $scope.$watch('SharedResource.sharedData.currentPage',

        function (newValue, oldValue) {
            if (newValue !== undefined && newValue !== oldValue) {
                $("html, body").animate({ scrollTop: 0 }, 500);
            }
        }, true);

}]);