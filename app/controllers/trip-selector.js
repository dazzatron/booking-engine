angular.module('jmd.tripSelector', [])

.controller('jmdTripSelectorCtrl',
['$scope', '$timeout', '$location', 'SharedResource',
function ($scope, $timeout, $location, SharedResource) {

    // reference to shared data
    $scope.SharedResource = SharedResource;
    $scope.sharedData = SharedResource.sharedData;

    // function to change country/trip
    $scope.changeTrip = function () {

        $scope.changeTripFlag = !$scope.changeTripFlag;

        if ($scope.changeTripFlag) {

            // we get all country/trip combos
            $scope.SharedResource.getCountryTrips();

        } else {

            // we get new trip

            var selectedTrip = $scope.sharedData.countryTrips.selectedCountry.selectedTrip;

            // only if different
            if (selectedTrip !== $scope.sharedData.trip.name) {
                $scope.SharedResource.getTrip(selectedTrip.split(' ').join('-'));
            }
        }

    };

    // function to change your mind about changing
    $scope.cancelTrip = function () {
        $scope.changeTripFlag = false;
    };

}]);