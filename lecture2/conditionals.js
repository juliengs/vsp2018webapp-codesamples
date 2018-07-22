console.log(":: conditionals.js ::");

var x = 5;

console.log(x == 5);    // true
console.log(x != 4);    // true
console.log(x > 5);     // false
console.log(x >= 5);    // true
console.log(x < 5);     // false
console.log(x <= 5);    // true

console.log(x === 5);   // true - equals+same type
console.log(x === "5"); // false - different type
console.log(x !== 5);   // false - not equals
console.log(x !== "5"); // true - different type

var foo = "VSP";
console.log(foo == "VSP");    // true
console.log(foo === "VSP");   // true
console.log(foo != "UBC");    // true
console.log(foo !== "42");    // true

console.log(" -------- ");

// --------

// Returns true if value >= min and value <= max
function isBetween(value, min, max) {
    return ( (value >= min) && (value <= max) );
}

console.log( isBetween( 10, 5, 15) ); // true
console.log( isBetween( 10, 5, 8 ) ); // false

console.log(" -------- ");

// --------

var condition = false;
if (condition)
    console.log("This line executes if condition is true");
console.log("This line will ALWAYS execute");

console.log(" -------- ");

// --------

if ( isBetween(15, 10, 20) ) {
    console.log("Number within range!");
} else {
    console.log("Number not within range!");
}

console.log(" -------- ");

// Equivalent to -->

if ( (15 >= 10) && (15 <= 20) ) {
    console.log("Number within range!");
} else {
    console.log("Number not within range!");
}

console.log(" -------- ");

// --------

if ( isBetween(15, 10, 20) ) {
    if ( isBetween(15, 14, 16) ) {	
	console.log("Excellent!");
    } else {
	console.log("Good.");
    }
} else {
    console.log("Bad!");
}

console.log(" -------- ");

// --------

var score = 75;
var grade = "";

if ( score >= 80 ) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Your grade is " + grade);

