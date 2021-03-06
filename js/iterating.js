(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["jimmy", "john", "jacob", "edward"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The number of elements in the array called \"names\" is " + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("console.logged name: " + names[0]);
    console.log("console.logged name: " + names[1]);
    console.log("console.logged name: " + names[2]);
    console.log("console.logged name: " + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log("for loop logged name: " + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log("forEach logged name: " + name)
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1];
    }

    function last(array) {
        // let i = 0;
        // while (i < (array.length - 1)) {
        //     i++;
        // }
        // return array[i];
        return array[array.length - 1];
    }

    console.log("function that returns first item in array logged: " + first(names));
    console.log("function that returns second item in array logged: " + second(names));
    console.log("function that returns last item in array logged: " + last(names));
})();
