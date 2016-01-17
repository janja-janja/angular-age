"use strict";

angular

.module("angular-age.services.human_age", [])

.service("angular-age.human_age", [function () {
    /*
    *   This service returns an object(a function object)
    *   Geting an age given date of birth is one handy thing to have
    *   and this is what this service tries to achieve
    */
    var findAge = function (startDate, endDate) {
        /*
        *   This function calculates the age of a thing given it's
        *   inception date [date of birth in case of mammals :)]
        *   and return a more human comprehendable value(the age)
        *
        *   @params -> startDate : String, (DD-MM-YYYY) [mandatory]
        *           -> endDate : String, (DD-MM-YYYY) [optional]
        */

        // If end date is give, use it, otherwise make a new date(current date)
        // and use it as the end date
        endDate = !endDate ? new Date() : new Date(endDate);
        startDate = new Date(startDate);

        var age = [],

        // Get the year(s) of both the start and the end date.
        // this is important since it will guide us to get the diff between the
        // year(s) in the two periods
        year = [endDate.getFullYear(), startDate.getFullYear()],
        yearDiff = year[0] - year[1],

        // Get the month(s) of both the start and the end date.
        // this is important since it will guide us to get the diff between the
        // the month(s) in the two periods.
        month = [endDate.getMonth(), startDate.getMonth()],
        monthDiff = month[0] - month[1],

        // Get the day(s) of both the start and the end date.
        // this is important since it will guide us to get the diff between the
        // the day(s) in the two periods.
        day = [endDate.getDate(), startDate.getDate()],
        dayDiff = day[0] - day[1];

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            --yearDiff;
        }

        if (monthDiff < 0) {
            monthDiff += 12;
        }

        if (dayDiff < 0) {
            startDate.setMonth(month[1] + 1, 0);
            dayDiff = startDate.getDate() - day[1] + day[0];
            --monthDiff;
        }

        // Incase there's a difference in year(s) in the two periods, store it.
        if (yearDiff > 0) {
            age.push(yearDiff + " year" + (yearDiff > 1 ? "s " : " "));
        }

        // Incase there's a difference in month(s) in the two periods, store it.
        if (monthDiff > 0) {
            age.push(monthDiff + " month" + (monthDiff > 1 ? "s" : ""));
        }

        // Incase there's a difference in day(s) in the two periods, store it.
        if (dayDiff > 0) {
            age.push(dayDiff + " day" + (dayDiff > 1 ? "s" : ""));
        }

        if (age.length > 1) {
            age.splice(age.length - 1 , 0, " and ");
        }

        var humanAge = age.join("");
        return humanAge;
    };
    return {
        humanAge: findAge
    };

}]);
