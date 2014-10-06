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

    var checkDateSelected = function () {

        for (var i = 0, length = SharedResource.sharedData.trip.dates.length; i < length; i++) {

            if (SharedResource.sharedData.trip.dates[i].selected) {
                return true;
            }

        }

        return false;

    };

    // init    
    var watcher = $scope.$watch('SharedResource.sharedData.trip.dates',

        function (newValue, oldValue) {

            if (newValue && !checkDateSelected()) {

                $scope.changeDate(SharedResource.sharedData.trip.dates[0]);
                watcher(); //removes

            }

        }, true);

}]);