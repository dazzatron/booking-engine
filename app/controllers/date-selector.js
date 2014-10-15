angular.module('jmd.dateSelector', [])

.controller('jmdDateSelectorCtrl', ['$scope', 'SharedResource', function ($scope, SharedResource) {

    // reference to shared
    $scope.SharedResource = SharedResource;

    // function to change date
    // refactor to radio?
    $scope.changeDate = function (date) {

        var i = SharedResource.sharedData.trip.dates.length;

        // deselect all
        while (i--) {
            SharedResource.sharedData.trip.dates[i].selected = false;
        }

        // select current
        date.selected = true;

        // set form data
        SharedResource.sharedData.formData = SharedResource.sharedData.formData || {};
        SharedResource.sharedData.formData.date = date.id;

    };

    var checkDateSelected = function () {

        var i = SharedResource.sharedData.trip.dates.length;

        while (i--) {

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