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

        for (var i = 0, length = $scope.pages.length; i < length; i++) {

            if ($scope.pages[i].label === $scope.currentPage) {
                $scope.currentPageIndex = i;
                $scope.prevPage = $scope.pages[i - 1];
                $scope.nextPage = $scope.pages[i + 1];
                break;
            }

        }

        // all paid, dont allow back
        //if (SharedResource.sharedData.trip.completed) {

        //}

        // set flag saying completed.
        //if ($scope.currentPageIndex === $scope.pages.length) {
        //    SharedResource.sharedData.trip.completed = true;
        //}

        if (!$scope.init) {

            $scope.init = true;

            //var ibe = localStorageService.get('ibe');

            //if (ibe) {
            //    SharedResource.sharedData = ibe;
            //    SharedResource.sharedData.reloading = false;
            //} else {
                $scope.SharedResource.getTrip($scope.tripName);
            //}

        }

    });

    //$scope.$watch('SharedResource.sharedData',

    //        function (newValue, oldValue) {

    //            if (newValue) {

    //                // LS
    //                localStorageService.set('ibe', newValue);

    //            }
    //        }, true);


    // summary scroll
    //$(window).scroll(function () {

    //    var me = $(this);
    //    var scrollTop = me.scrollTop();

    //    if (scrollTop > $('.col-summary').offset().top) {
    //        $('.col-summary').addClass('fixed');
    //    } else {
    //        $('.col-summary').removeClass('fixed');
    //    }

    //});

    $scope.$watch('SharedResource.sharedData.trip',

            function (newValue, oldValue) {

                if (newValue) {



                    // LS
                    //localStorageService.set('trip', newValue);

                    // start with trip cost
                    var grandTotal = SharedResource.sharedData.trip.totalGuestCost;

                    // loop through tours
                    for (var i = 0, length = $scope.SharedResource.sharedData.trip.tours.length; i < length; i++) {

                        if ($scope.SharedResource.sharedData.trip.tours[i].selected) {
                            grandTotal += $scope.SharedResource.sharedData.trip.tours[i].perPerson * SharedResource.sharedData.trip.totalGuests;
                        }

                    }

                    // set value
                    SharedResource.sharedData.trip.grandTotal = grandTotal;

                }

            }, true);


}]);