angular.module('jmd.dateSelector', [])

.controller('jmdDateSelectorCtrl', ['$scope', 'SharedResource', function ($scope, SharedResource) {

    // reference to shared
    $scope.SharedResource = SharedResource;

    // function to change date
    $scope.changeDate = function (date) {
        $scope.SharedResource.sharedData.formData.selectedDate = date;
    };

    // we get new data from server
    $scope.$watch('SharedResource.sharedData.trip.dates',

        function (newValue, oldValue) {

            if (newValue !== undefined && newValue !== oldValue) {
                $scope.changeDate($scope.SharedResource.sharedData.trip.dates[0]);
            }

        }, true);

}]);