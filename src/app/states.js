"use strict";

angular

.module("yoda.routes", ["ui.router"])

.config(function config($stateProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            views: {
                "main@": {
                    templateUrl: "common/tpls/content.tpl.html",
                    controller: "yoda.controllers"
                }
            }
        });
});
