(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * Math.pow(circle.radius, 2);
        },

        logInfo: function (doRounding) {
            if (doRounding === true) {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.round(this.getArea()));
            } else {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + this.getArea())
            }
        }
    }

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5;

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

//mmklh