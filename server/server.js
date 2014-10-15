var http = require('http');
var express = require('express');
var app = express();
var mongojs = require("mongojs");
var db = mongojs.connect("ibe", ["trips", "currencies"]);

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded()); // to support URL-encoded bodies

/**
 * CORS support.
 */
app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.status(200).end();
    next();
}); 

// api to check if a trip is valid
app.post('/checkTrip', function (req, res, next) {

    res.send(req.body);

    // page 2
    // need a country, trip, valid date, at least one person, not over max guests for room and not more than max guests for trip?
    // redirect?

    // page 3
    // above, and...
    // nothing else>

    // page 4
    // above, and...
    // form validated?

    // page 5
    // above, and...
    // paid for?

}); 

// get all countries, and all trips
app.get('/getCountryTrips', function (req, res, next) {

    var countries = [];
    var countriesLog = [];

    db.trips.find(function (err, trips) {

        //console.log(err);

        //if (err) {
        //    res.status(500).end();
        //}

        var i = length = trips.length;

        while (i--) {

            var country = trips[i].trip.country;
            var trip = trips[i].trip.name;

            if (!countriesLog[country]) {
                countriesLog[country] = true;
                countries.push({ 'name': country, 'trips': [] });
            }

            var b = countries.length;

            while (b--) {
                if (countries[b].name === country) {
                    countries[b].trips.push(trip);
                    break;
                }
            }

        };

        res.send({ "countries": countries }).end();

    });

});

// get individual trip
app.get('/getTrip/:tripName', function (req, res, next) {

    var result = {};

    db.trips.find({ "tripName": req.params.tripName }, function (err, trip) {

        //console.log(err);

        //if (err) {
        //    res.status(500).end();
        //}

        result = trip[0];
        result.currencies = {};

        // get currencies
        db.currencies.find(function (err, currencies) {
            result.currencies = currencies;
            res.send(result).end();
        });

    });

});

app.listen(3000);