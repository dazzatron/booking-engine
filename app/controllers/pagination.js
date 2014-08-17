angular.module('jmd.pagination', [])

.controller('jmdPaginationCtrl', ['$scope', 'SharedResource', function ($scope, SharedResource) {

    $scope.SharedResource = SharedResource;

    $scope.pages = [
        { label: 'select' },
        { label: 'extras' },
        { label: 'guests' },
        { label: 'payment' },
        { label: 'confirmation' }
    ];

}]);