angular.module('jmd.controllers', [])

.controller('jmdBookingEngineController',
['$location', '$scope', 'SharedResource', '$rootScope',
function ($location, $scope, SharedResource, $rootScope) {

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

        /// show loading animation
        SharedResource.sharedData.reloading = true;

    });

    // Watch route changes
    $rootScope.$on("$routeChangeSuccess", function (event, route) {

        /// remove loading animation
        SharedResource.sharedData.reloading = false;

        // kick off
        $scope.tripName = $location.path().split('/')[1];
        $scope.currentPage = $location.path().split('/')[2];

        for (var i = 0, length = $scope.pages.length; i < length; i++) {

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

    });

}]);