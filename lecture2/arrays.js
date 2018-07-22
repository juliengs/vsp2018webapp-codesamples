console.log(":: arrays.js ::");

var vspResults = [99, 96, 93, 91, /* ... */ 41];
console.log(vspResults);
/* Printing the grade of the top 3 students -- be careful,
   in most programming languages, the first index is 0! */
console.log("Grade of the 1st student: " + vspResults[0]);
console.log("Grade of the 2nd student: " + vspResults[1]);
console.log("Grade of the 3rd student: " + vspResults[2]);

// Adding an item
vspResults.push(39);
console.log(vspResults);

// Removing an item
vspResults.pop(); // Removes 39
console.log(vspResults);

// Length of array
console.log( vspResults.length );
