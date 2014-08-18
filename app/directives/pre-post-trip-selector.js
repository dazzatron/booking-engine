angular.module('jmd.prePostTripSelector', [])

.directive('jmdPrePostTripSelector', ['SharedResource', function (SharedResource) {

    return {
        restrict: 'EA',
        //transclude: true,
        scope: {
            tripType:'@'
        },
        templateUrl: 'app/templates/pre-post-trip-selector/pre-post-trip-selector.html',
        link: function (scope, element) {

            scope.SharedResource = SharedResource;

            // function to add pre trip
            scope.changeTrip = function (trip, index) {

                // set flag
                trip.selected = !trip.selected;

                // check/create
                scope.SharedResource.sharedData.formData[tripType].trip = scope.SharedResource.sharedData.formData[tripType].trip || [];

                if (trip.selected) {
                    // remove
                    scope.SharedResource.sharedData.formData[tripType].trip.push(preTrip);
                } else {
                    // add
                    scope.SharedResource.sharedData.formData[tripType].trip.splice(index, 1);
                }

            };

        }
    };

}]);