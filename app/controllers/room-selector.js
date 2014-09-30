angular.module('jmd.roomSelector', [])

.controller('jmdRoomSelectorCtrl', ['$scope', 'SharedResource', function ($scope, SharedResource) {

    $scope.SharedResource = SharedResource;

    // something added/removed
    $scope.$watch('SharedResource.sharedData.trip.rooms', function (newValue, oldValue) {

        if (newValue) {

            var totalGuests = 0;
            var totalGuestCost = 0;

            // create/clear guests array - should we clear this??
            $scope.SharedResource.sharedData.trip.guests = [];

            // loop to create totals/guest form etc
            for (var i = 0, length = $scope.SharedResource.sharedData.trip.rooms.length; i < length; i++) {

                var currentRoom = $scope.SharedResource.sharedData.trip.rooms[i].selectedRoom;

                // calc max values
                currentRoom.maxAdults = currentRoom.maxPeople - currentRoom.children;
                currentRoom.maxChildren = currentRoom.maxPeople - currentRoom.adults;

                currentRoom.totalGuests = currentRoom.adults + currentRoom.children; // for DOM

                totalGuests += currentRoom.totalGuests;
                totalGuestCost += currentRoom.adults * currentRoom.perAdult;
                totalGuestCost += currentRoom.children * currentRoom.perChild;

                // for the guests form
                for (var a = 0, lengtha = currentRoom.adults; a < lengtha; a++) {
                    $scope.SharedResource.sharedData.trip.guests.push({ 'title': 'Mr', 'type': 'adult' });
                }
                for (var b = 0, lengthb = currentRoom.children; b < lengthb; b++) {
                    $scope.SharedResource.sharedData.trip.guests.push({ 'title': 'Mr', 'type': 'child' });
                }

            }

            // create grand totals
            $scope.SharedResource.sharedData.trip.totalGuests = totalGuests;
            $scope.SharedResource.sharedData.trip.totalGuestCost = totalGuestCost;

            // slide down to ensure error message shown
            if (totalGuests > $scope.SharedResource.sharedData.trip.maxGroupSize) {
                $("html, body").animate({
                    scrollTop: $(document).height()
                }, 500);
            }

        }

    }, true);

    // function to add room
    $scope.addRoom = function (init) {

        var newRoomOptions = angular.copy($scope.SharedResource.sharedData.trip.roomOptions);
        $scope.SharedResource.sharedData.trip.rooms.push({ roomOptions: newRoomOptions, selectedRoom: newRoomOptions[0] });

        // shift page down if user clicks
        if (!init) {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 500);
        }

    };

    // remove room function
    $scope.removeRoom = function (index) {
        $scope.SharedResource.sharedData.trip.rooms.splice(index, 1);
    };

    // watch for new data from server
    // if we have data before this, this will be called anyway, if we get it after it will also be called, so no issue
    $scope.$watch('SharedResource.sharedData.trip.roomOptions',

        function (newValue, oldValue) {

            if (newValue) {

                // empty rooms array to store rooms added.
                $scope.SharedResource.sharedData.trip.rooms = [];

                // create values
                for (var i = 0, length = $scope.SharedResource.sharedData.trip.roomOptions.length; i < length; i++) {

                    var currentRoomOptions = $scope.SharedResource.sharedData.trip.roomOptions[i];
                    currentRoomOptions.adults = 1;
                    currentRoomOptions.children = 0;
                    currentRoomOptions.maxAdults = currentRoomOptions.maxPeople;
                    currentRoomOptions.maxChildren = currentRoomOptions.maxPeople - 1;

                }

                // add room by default
                $scope.addRoom(true);

            }

        }, true);

}]);