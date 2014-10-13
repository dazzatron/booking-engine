angular.module('jmd.resources', [])

.factory('SharedResource', ['$http', '$location', '$timeout', function ($http, $location, $timeout) {

    //var server = "http://localhost:3000";
    var server = "http://s17668332.onlinehome-server.info:3000";

    // object to hold data over the entire application. 
    var sharedData = {};
    sharedData.formData = {}; // to hold data for the server
    sharedData.uiData = {}; // to hold data used for the UI

    var checkTrip = function () {

        sharedData.reloading = true;

        $http({
            method: 'POST',
            url: server + '/checkTrip',
            data: sharedData
        }).success(function (data) {
            sharedData.reloading = false;
        }).error(function () {
            sharedData.error = 'fail';
        });

    };

    var getCountryTrips = function () {

        // clear
        sharedData.countryTrips = undefined;

        // scroll page to top
        $("html, body").animate({ scrollTop: 0 }, 500);

        $http({
            method: 'GET',
            url: server + '/getCountryTrips'
        }).success(function (data) {

            angular.forEach(data.countries, function (country) {

                // select current country
                if (country.name === sharedData.trip.country) {

                    data.selectedCountry = country;

                    // select current trip
                    angular.forEach(country.trips, function (trip) {

                        if (trip === sharedData.trip.name) {
                            country.selectedTrip = trip;
                        }

                    });

                } else {
                    // otherwise it's always the first on the list
                    country.selectedTrip = country.trips[0];
                }

                // set data object
                sharedData.countryTrips = data;

            });

        }).error(function () {
            sharedData.error = 'fail';
        });


    };

    var getTrip = function (tripName) {

        sharedData.reloading = true;

        $http({
            method: 'GET',
            url: server + '/getTrip/' + tripName
        }).success(function (data) {
            $("html, body").animate({ scrollTop: 0 }, 500);
            sharedData.reloading = false;
            sharedData.currencies = data.currencies;
            sharedData.selectedCurrency = data.currencies[0];
            sharedData.trip = data.trip;
            $location.path(data.trip.name.split(' ').join('-') + '/select');
        })
        .error(function (data) {
            sharedData.error = data;
        });

    };

    return ({
        sharedData: sharedData,
        getTrip: getTrip,
        checkTrip: checkTrip,
        getCountryTrips: getCountryTrips
    });

}]);