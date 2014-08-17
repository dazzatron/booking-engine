(function () {
    'use strict';
}());

describe('controller: room selector', function () {

    var jmdRoomSelectorCtrl, myScope, SharedResource;

    beforeEach(module('jmdApp'));

    beforeEach(inject(function ($controller, $rootScope, SharedResource) {

        myScope = $rootScope.$new();

        //mock data
        SharedResource = {};
        SharedResource.sharedData = {};
        SharedResource.sharedData.trip = {};

        SharedResource.sharedData.formData = {};

        SharedResource.sharedData.trip.roomWordingOptions = [
            { "id": 1, "name": "Two Double", "adults": 2, "adultOptions": [1, 2, 3, 4], "children": 2, "childOptions": [0, 1, 2, 3], "maxPeople": 4, "perAdult": 2000.00, "perChild": 900 },
            { "id": 2, "name": "Two Single", "adults": 1, "adultOptions": [1, 2], "children": 0, "childOptions": [0, 1], "maxPeople": 2, "perAdult": 1200, "perChild": 900 }
        ];

        // init
        jmdRoomSelectorCtrl = $controller("jmdRoomSelectorCtrl", {
            $scope: myScope,
            SharedResource: SharedResource
        });

    }));

    it('should have one room by default', inject(function () {
        myScope.$apply();
        expect(myScope.SharedResource.sharedData.formData.rooms.length).toBe(1);
    }));

    it('should have one more room when added', inject(function () {
        myScope.$apply();
        var roomsLengthBefore = myScope.SharedResource.sharedData.formData.rooms.length;
        myScope.addRoom();
        expect(myScope.SharedResource.sharedData.formData.rooms.length).toBe(roomsLengthBefore + 1);
    }));

    it('should have one less room when removed', inject(function () {
        myScope.$apply();
        var roomsLengthBefore = myScope.SharedResource.sharedData.formData.rooms.length;
        myScope.removeRoom();
        expect(myScope.SharedResource.sharedData.formData.rooms.length).toBe(roomsLengthBefore - 1);
    }));

    //it('should create a grand total', inject(function () {

    //    myScope.$apply();

    //    var rooms = myScope.SharedResource.sharedData.formData.rooms;
    //    var totalGuests = 0;

    //    for (var i = 0, length = rooms.length; i < length; i++) {
    //        //totalGuests += Number(rooms[i].adults + rooms[i].children);
    //        console.log(rooms[i].perAdult);
    //    }

    //    //expect(myScope.SharedResource.sharedData.formData.totalGuests).toBe(totalGuests);

    //}));

});