(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsString1 = planetsArray.join("<br>");
    console.log(planetsString1);

    let planetsString2 = planetsArray.join("</li><li>");
    let stringBegin = "<ul><br><li>";
    let stringEnd = "</li><br></ul>";
    console.log(stringBegin + planetsString2 + stringEnd);
    document.write(stringBegin + planetsString2 + stringEnd);
})();