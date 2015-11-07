"use strict";

describe("Yoda App Unit Tests: ", function () {
    var scope, controller;
    beforeEach(function () {
        module("yoda");
        inject(
            ["$rootScope", "$controller", function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = function () {
                    var data = {
                        $scope: scope
                    };
                    var contrll = $controller("yoda.controllers", data);
                    return contrll;
                };
            }]);
    });

    it("should pass a dummy test", function () {
        expect(controller()).toBeDefined();
    });
});
