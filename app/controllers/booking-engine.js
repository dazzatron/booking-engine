angular.module('jmd.controllers', [])

.controller('jmdBookingEngineController',
['$location', '$scope', 'SharedResource', '$rootScope', 'localStorageService',
function ($location, $scope, SharedResource, $rootScope, localStorageService) {

    $scope.SharedResource = SharedResource;

    // pagination - put into shared?
    $scope.pages = [
        { label: 'select' },
        { label: 'extras' },
        { label: 'guests' },
        { label: 'payment' },
        { label: 'confirmation' }
    ];

    // Watch route changes
    $rootScope.$on("$routeChangeStart", function (event, route) {

        $("html, body").animate({ scrollTop: 0 }, 200);

        // show loading animation
        SharedResource.sharedData.reloading = true;

    });

    // Watch route changes
    $rootScope.$on("$routeChangeSuccess", function (event, route) {

        /// remove loading animation
        SharedResource.sharedData.reloading = false;

        // kick off
        $scope.tripName = $location.path().split('/')[1];
        $scope.currentPage = $location.path().split('/')[2];
        var i = $scope.pages.length;

        while (i--) {

            if ($scope.pages[i].label === $scope.currentPage) {
                $scope.currentPageIndex = i;
                $scope.prevPage = $scope.pages[i - 1];
                $scope.nextPage = $scope.pages[i + 1];
                break;
            }

        }

        if (!$scope.init) {
            $scope.init = true;
            $scope.SharedResource.getTrip($scope.tripName);
        }

        // check against server???
        $scope.SharedResource.checkTrip();

    });

    $scope.$watch('SharedResource.sharedData.trip',

            function (newValue, oldValue) {

                if (newValue) {

                    // start with trip cost
                    var grandTotal = SharedResource.sharedData.trip.totalGuestCost;
                    var i = $scope.SharedResource.sharedData.trip.tours.length;

                    // loop through tours
                    while (i--) {

                        if ($scope.SharedResource.sharedData.trip.tours[i].selected) {
                            grandTotal += $scope.SharedResource.sharedData.trip.tours[i].perPerson * SharedResource.sharedData.trip.totalGuests;
                        }

                    }

                    // set value
                    SharedResource.sharedData.trip.grandTotal = grandTotal;

                }

            }, true);

}]);