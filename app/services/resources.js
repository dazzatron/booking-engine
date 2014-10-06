angular.module('jmd.resources', [])

.factory('SharedResource', ['$http', '$location', '$timeout', function ($http, $location, $timeout) {

    // object to hold data over the entire application. 
    var sharedData = {};

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
                alert("Sorry, an error occurred");
            });

        }, 2000);

    };

    getTrip = function (tripName) {

        sharedData.reloading = true;

        $timeout(function () {

            $http({
                method: 'GET',
                url: 'app/json/' + tripName + '.json'
            }).success(function (data) {
                $("html, body").animate({ scrollTop: 0 }, 500);
                sharedData.reloading = false;
                sharedData.currencies = data.currencies;
                sharedData.selectedCurrency = data.currencies[0];
                sharedData.trip = data.trip;
                $location.path(data.trip.name.split(' ').join('-') + '/select');
            })
            .error(function () {
                // put in alerts system
                alert("Sorry, an error occurred");
            });

        }, 1000);

    };

    return ({
        sharedData: sharedData,
        getTrip: getTrip,
        getCountryTrips: getCountryTrips
    });

}]);