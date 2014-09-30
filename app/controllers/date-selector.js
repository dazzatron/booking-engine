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

    // we get new data from server
    // if we have data before this, this will be called when created anyway, if we get it after it will also be called, so no issue
    var watcher = $scope.$watch('SharedResource.sharedData.trip.dates',

        function (newValue, oldValue) {

            if (newValue) {
                $scope.changeDate(SharedResource.sharedData.trip.dates[0]);
                watcher(); //removes
            }

        }, true);

}]);