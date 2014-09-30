angular.module('jmd.tourSelector', [])

.controller('tourSelectorCtrl',
['$scope', '$location', 'SharedResource',
function ($scope, $location, SharedResource) {
    
    $scope.SharedResource = SharedResource;

    // function to add pre trip
    $scope.changeTour = function (tour) {

        // set flag
        tour.selected = !tour.selected;

    };

}]);