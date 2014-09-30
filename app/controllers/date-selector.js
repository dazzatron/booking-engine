angular.module('jmd.dateSelector', [])

.controller('jmdDateSelectorCtrl', ['$scope', 'SharedResource', function ($scope, SharedResource) {

    // reference to shared
    $scope.SharedResource = SharedResource;

    // function to change date
    $scope.changeDate = function (date) {

        // deselect all
        for (var i = 0, length = SharedResource.sharedData.trip.dates.length; i < length; i++) {
            SharedResource.sharedData.trip.dates[i].selected = false;
        }

        // select current
        date.selected = true;

    };

    $scope.init = function () {
        // select first date
        $scope.changeDate(SharedResource.sharedData.trip.dates[0]);
    };

    // we already have data from server, but we havent formatted it
    if ($scope.SharedResource.sharedData.trip && !$scope.SharedResource.sharedData.trip.dateSelected) {

        $scope.init();

    } else {

        // we get new data from server
        $scope.$watch('SharedResource.sharedData.trip.dates',

            function (newValue, oldValue) {

                if (newValue && newValue !== oldValue) {
                    $scope.init();
                }

            }, true);

    }

}]);