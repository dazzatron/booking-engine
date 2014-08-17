angular.module('jmd.roomSelector', [])

.controller('jmdRoomSelectorCtrl', ['$scope', 'SharedResource', function ($scope, SharedResource) {

    $scope.SharedResource = SharedResource;

    // function to add room
    $scope.addRoom = function (init) {

        var formData = $scope.SharedResource.sharedData.formData;

        //if (formData) {

            // empty rooms array to store rooms added.
            formData.rooms = formData.rooms || [];

            // push a copy of the original
            formData.rooms.push(angular.copy($scope.SharedResource.sharedData.trip.roomWordingOptions));

            // set the default as the first room
            formData.rooms[formData.rooms.length - 1].selectedRoom = formData.rooms[formData.rooms.length - 1][0];

            // shift page down
            if (!init) {
                $("html, body").animate({
                    scrollTop: $(document).height()
                }, 500);
            }

        //}

    };

    // remove room function
    $scope.removeRoom = function (index) {
        $scope.SharedResource.sharedData.formData.rooms.splice(index, 1);
    };

    // new data from server
    $scope.$watch('SharedResource.sharedData.trip.roomWordingOptions',

        function (newValue, oldValue) {

            //if (newValue !== null && newValue !== oldValue) {

                //add room by default, if there are none.
                //if (!$scope.SharedResource.sharedData.formData.rooms) {
                    $scope.addRoom(true);
                //}

            //}

        }, true);

    // watcher to create total
    $scope.$watch('SharedResource.sharedData.formData.rooms', function (newValue, oldValue) {

        if (newValue !== undefined && newValue !== oldValue) {

            if ($scope.SharedResource.sharedData.formData) {

                var totalGuests = 0;
                var totalGuestCost = 0;

                for (var i = 0, length = $scope.SharedResource.sharedData.formData.rooms.length; i < length; i++) {
                    var currentRoom = $scope.SharedResource.sharedData.formData.rooms[i].selectedRoom;
                    totalGuests += currentRoom.adults + currentRoom.children;
                    totalGuestCost += currentRoom.adults * currentRoom.perAdult;
                    totalGuestCost += currentRoom.children * currentRoom.perChild;
                }

                $scope.SharedResource.sharedData.formData.totalGuests = totalGuests;
                $scope.SharedResource.sharedData.formData.totalGuestCost = totalGuestCost;

                if (totalGuests > $scope.SharedResource.sharedData.trip.maxGroupSize) {
                    $("html, body").animate({
                        scrollTop: $(document).height()
                    }, 500);
                }

            }

        }

    }, true);


}]);