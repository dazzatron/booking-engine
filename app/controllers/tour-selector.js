angular.module('jmd.tourSelector', [])

.controller('tourSelectorCtrl',
['$scope', '$location', 'SharedResource',
function ($scope, $location, SharedResource) {

    $scope.SharedResource = SharedResource;

    // function to add pre trip, this automatically changes the shared obj, not local obj
    $scope.changeTour = function (tour) {

        // set flag
        tour.selected = !tour.selected;
        tour.totalTourCost = tour.perPerson * SharedResource.sharedData.trip.totalGuests;

    };

    // select options
    $scope.callBackOptions = [
        'Do not mind',
        'Between 9AM-12PM',
        'Between 12PM-5PM'
    ];

    // check/create
    if (SharedResource.sharedData.trip) {
        SharedResource.sharedData.trip.callBackOption = SharedResource.sharedData.trip.callBackOption || $scope.callBackOptions[0];
    }

}]);