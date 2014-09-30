(function () {
    'use strict';
}());

describe('controller: date selector', function () {

    var jmdDateSelectorCtrl, myScope, SharedResource;

    beforeEach(module('jmdApp'));

    beforeEach(inject(function ($controller, $rootScope, SharedResource) {

        SharedResource = {};
        SharedResource.sharedData = {};
        SharedResource.sharedData.trip = {};


        SharedResource.sharedData.trip.dates = [
            {
                id: 1,
                from: { date: '10', month: 'Feb', year: '2014' },
                to: { date: '17', month: 'Feb', year: '2014' }
            },
            {
                id: 2,
                from: { date: '17', month: 'Feb', year: '2014' },
                to: { date: '24', month: 'Feb', year: '2014' }
            }
        ];

        myScope = $rootScope.$new();

        jmdDateSelectorCtrl = $controller("jmdDateSelectorCtrl", {
            $scope: myScope,
            SharedResource: SharedResource
        });

    }));

    it('should have at least one date from the server', inject(function () {
        myScope.$apply();
        expect(myScope.SharedResource.sharedData.trip.dates.length).not.toBe(0);
    }));

    it('should have first date selected', inject(function () {
        myScope.$apply();
        //expect(myScope.SharedResource.sharedData.formData.selectedDate).toBe(myScope.SharedResource.sharedData.trip.dates[0]);
    }));

    it('should change the date when changedate is called', inject(function () {

        var date = myScope.SharedResource.sharedData.trip.dates[1];
        myScope.changeDate(date);
        expect(myScope.SharedResource.sharedData.formData.selectedDate).toBe(date);

    }));

    it('should change the to first date when the server data is changed', inject(function () {

        myScope.$apply();

        var dateBefore = myScope.SharedResource.sharedData.formData.selectedDate;

        myScope.SharedResource.sharedData.trip.dates = [
            {
                id: 3,
                from: { date: '10', month: 'Mar', year: '2015' },
                to: { date: '17', month: 'Mar', year: '2015' }
            }
        ];

        myScope.$apply();

        var dateAfter = myScope.SharedResource.sharedData.formData.selectedDate;
        expect(dateAfter).not.toBe(dateBefore);

    }));

});