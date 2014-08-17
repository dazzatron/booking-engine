(function () {
    'use strict';
}());

describe('controller: date selector', function () {

    var jmdPaginationCtrl, myScope, SharedResource;

    beforeEach(module('jmdApp'));

    beforeEach(inject(function ($controller, $rootScope, SharedResource) {

        myScope = $rootScope.$new();

        jmdPaginationCtrl = $controller("jmdPaginationCtrl", {
            $scope: myScope,
            SharedResource: SharedResource
        });

    }));

    it('should have five pages', inject(function () {
        expect(myScope.pages.length).toBe(5);
    }));

    //it('should have the first page selected', inject(function () {
    //    expect(myScope.pages.length).toBe(5);
    //}));

});