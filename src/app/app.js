"use strict";

angular

.module("yoda", [
    //  3rd party
    "ui.router",
    "ui.bootstrap",
    "templates-app",
    "templates-common",

    // my apps
    "yoda.common",
    "yoda.routes",
    "yoda.config"
])

.controller("yoda.controllers", [function () {
}]);
