angular.module('jmd.filters', [])

.filter('currency', ['SharedResource', '$filter', function (SharedResource, $filter) {

    return function (input) {

        //if (input) {

            var currency = SharedResource.sharedData.selectedCurrency;

            if (currency) {
                return currency.symbol + $filter('number')(Number(input * currency.rate));
            }

        //}

    };

}]);