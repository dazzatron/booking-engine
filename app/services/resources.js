angular.module('jmd.resources', [])

.factory('SharedResource', ['$http', '$location', '$timeout', function ($http, $location, $timeout) {

    // object to hold data over the entire application. 
    var sharedData = {};
    sharedData.currentPage = 1;

    goToPage = function (page) {
        sharedData.currentPage = page;
    };

    formatCountryTrips = function (data) {

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

    };

    getCountryTrips = function () {

        // clear
        sharedData.countryTrips = undefined;

        // scroll page to top
        $("html, body").animate({ scrollTop: 0 }, 500);

        $timeout(function () {

            $http({
                method: 'GET',
                url: 'app/json/country-trips.json'
            }).success(function (data) {
                formatCountryTrips(data);
            }).error(function () {
                // put in errors system
                alert("Sorry, an error occurred");
            });

        }, 2000);

    };

    // seperate this so it's all in one place and can be used for testing
    formatTripData = function (data) {

        $("html, body").animate({ scrollTop: 0 }, 500);
        $location.path(data.trip.name.split(' ').join('-'));
        sharedData.reloading = false;

        // move to currency controller?
        sharedData.currencies = data.currencies;
        sharedData.selectedCurrency = data.currencies[0];

        // reset objects
        sharedData.formData = {};
        sharedData.trip = data.trip;

    };

    getTrip = function (tripName, data) {

        // would normally go server side.
        if (!tripName) {
            tripName = 'passport-to-the-world';
        }

        sharedData.reloading = true;

        // if theres no data get from server
        if (!data) {

            $timeout(function () {

                $http({
                    method: 'GET',
                    url: 'app/json/' + tripName + '.json'
                }).success(function (data) {
                    formatTripData(data);
                })
                .error(function () {
                    // put in alerts system
                    alert("Sorry, an error occurred");
                });

            }, 2000);

        } else {
            // we have data
            formatTripData(data);
        }

    };



    return ({
        sharedData: sharedData,
        getTrip: getTrip,
        getCountryTrips: getCountryTrips,
        goToPage: goToPage
    });

}]);