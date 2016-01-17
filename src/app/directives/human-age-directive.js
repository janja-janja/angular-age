"use strict";

angular

.module("angular-age.directives.human_age", [])

.directive("angularAge", ["$injector", "angular-age.human_age",
    function ($injector, ageService) {
        return {
            restrict: "E",
            template: "<span>{{humanAge}}</span>",
            replace: true,
            scope: {
                startdate: "@startdate",
                enddate: "@enddate"
            },
            link: function (scope) {
                var startdate = scope.startdate;
                var enddate = scope.enddate;
                scope.humanAge = ageService.humanAge(startdate, enddate);
            }
        };
    }
]);
