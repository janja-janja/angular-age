"use strict";

angular

.module("angular-age", [
    //  3rd party
    "ui.router",
    "templates-app",
    "templates-common",

    // my apps
    "yoda.common",
    "yoda.routes",
    "yoda.config",

    "angular-age.services",
    "angular-age.directives"
]);
