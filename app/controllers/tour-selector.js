angular.module('jmd.tourSelector', [])

.controller('tourSelectorCtrl',
['$scope', '$location', 'SharedResource',
function ($scope, $location, SharedResource) {
    
    $scope.SharedResource = SharedResource;

    // function to add pre trip
    $scope.changeTour = function (tour, type, index) {

        // set flag
        tour.selected = !tour.selected;

        // check/create
        $scope.SharedResource.sharedData.formData.tours = $scope.SharedResource.sharedData.formData.tours || [];

        if (tour.selected) {
            // add
            $scope.SharedResource.sharedData.formData.tours[index] = tour;
        } else {
            // remove
            $scope.SharedResource.sharedData.formData.tours[index] = {};
        }

    };

}]);