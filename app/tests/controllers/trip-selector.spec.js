//'use strict';

//describe('controller: trip selector', function () {

//    var jmdTripSelectorCtrl, myScope, jmdBookingEngineSharedRes, jmdBookingEngineSharedD;

//    beforeEach(module('jmdApp'));

//    beforeEach(inject(function ($controller, $rootScope, SharedResource) {

//        myScope = $rootScope.$new();

//        // mock data
//        //var data = {

//        //    countryTrips: {

//        //        "countries": [
//        //            {
//        //                "name": "china",
//        //                "trips": [
//        //                    "classic china",
//        //                    "china and the yangtze"
//        //                ]
//        //            },
//        //            {
//        //                "name": "japan",
//        //                "trips": [
//        //                    "classic japan",
//        //                    "passport to the world"
//        //                ]
//        //            }
//        //        ]

//        //    }

//        //};

//        //// process mock data
//        //SharedResource.processCountryTrips(data);

//        //SharedResource = {};
//        //SharedResource.trip = {};
//        //SharedResource.trip.name = 'non existent trip';

//        jmdTripSelectorCtrl = $controller("jmdTripSelectorCtrl", {
//            $scope: myScope,
//            SharedResource: SharedResource
//        });

//    }));

//    it('should have changeTripFlag as undefined by default', inject(function () {
//        expect(myScope.changeTripFlag).toBe(undefined);
//    }));

//    //it('should change changeTripFlag to the opposite on changeTrip function', inject(function () {
//    //    var changeTripFlagBefore = myScope.changeTripFlag = false;
//    //    myScope.changeTrip();
//    //    expect(myScope.changeTripFlag).toBe(!changeTripFlagBefore);
//    //}));

//    it('should change changeTripFlag to false on cancel', inject(function () {
//        myScope.cancelTrip();
//        expect(myScope.changeTripFlag).toBe(false);
//    }));

//    //it('should be a new test', inject(function () {
//    //    myScope.changeTripFlag = true;
//    //    myScope.changeTrip();
//    //    console.log(expect(myScope.SharedResource.countryTrips.selectedCountry));
//    //}));

//});