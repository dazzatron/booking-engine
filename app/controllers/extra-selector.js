angular.module('jmd.extraSelector', [])

.controller('extraSelectorCtrl',
['$scope', '$location', 'SharedResource',
function ($scope, $location, SharedResource) {
    
    $scope.SharedResource = SharedResource;

}]);