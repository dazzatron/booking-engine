angular.module('jmd.controllers', [])

.controller('jmdBookingEngineController',
['$location', '$scope', 'SharedResource', 'localStorageService', '$rootScope', '$route',
function ($location, $scope, SharedResource, localStorageService, $rootScope, $route) {

    $scope.SharedResource = SharedResource;

    // to shared?
    $scope.secondsInDay = 86400000;

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
        // fire back to server to check?

        SharedResource.sharedData.reloading = true;

    });

    // persist to LS
    $scope.$watch('SharedResource.sharedData',

        function (newValue, oldValue) {

            if (newValue && newValue !== oldValue) {
                localStorageService.set($scope.tripName, newValue);
            }

        }, true);


    // Watch route changes
    $rootScope.$on("$routeChangeSuccess", function (event, route) {

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

        // is the page actually valid?
        if ($scope.currentPageIndex > -1) {

            if (!$scope.init) {

                $scope.init = true;

                //var sharedData = localStorageService.get($scope.tripName);

                //if (!sharedData) {
                    $scope.SharedResource.getTrip($scope.tripName);
                //} else {
                //   $scope.SharedResource.sharedData = sharedData;
                //}

            }

        }

        // this would actually go server side
        if ($scope.currentPageIndex > 0) {

            // we need a date, and more than 1 person
            // redirect to page 1 on fail
            //window.location.href = '/booking-engine/#/' + $scope.tripName;

        }

        if ($scope.currentPageIndex > 2) {

            // we need a valid form
            // redirect to page 3 on fail

        }

        if ($scope.currentPageIndex === $scope.pages.length) {

            // we need it to have been paid for
            // redirect to page 4 on fail

        }

    });


}]);