console.log(":: loops.js ::");

var vspResults = [99, 96, 93, 91, 89, 87, 80, 75, 74, 63, 61, 52, 49, 47, 43, /* ... */ 41];
for (var i = 0; i < 3; i++) {
    console.log("Score #" + (i+1) + ": " + vspResults[i]);
}

console.log(" -------- ");

// --------

// Print the top 10 results but stop when they get below 90:
for (var i = 0; ( (i < 10) && (vspResults[i] >= 90) ); i++) {
    console.log("Score #" + (i+1) + ": " + vspResults[i]);
}

console.log(" -------- ");

// --------

var passingGrade = 50;

// Print all results which are above or equal to the passing grade
var i = 0;
while (vspResults[i] >= passingGrade) {
    console.log(vspResults[i]);
    i++;
}

console.log(" -------- ");

// --------

// Print the first result, and then print all results which are above or equal to the passing grade

passingGrade = 50;

var i = 0;
do {
    console.log(vspResults[i]);
    i++;
} while (vspResults[i] >= passingGrade);

