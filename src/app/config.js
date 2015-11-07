"use strict";

angular

.module("yoda.config", ["ui.router"])

.config(["$urlRouterProvider", function (yodaRouter) {
    yodaRouter.otherwise("/");
}])

.config(["$locationProvider", function (yodaLocation) {
    yodaLocation.html5Mode(true);
}]);
