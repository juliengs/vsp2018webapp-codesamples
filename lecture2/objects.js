console.log(":: objects.js ::");

var vspResults = {
    Karthik:99,
    Bob:96,
    Kevin:93,
    Julien:91,
    John:41};

console.log(vspResults["Karthik"]); // prints 99
console.log(vspResults["Bob"]); // prints 96

for (var e in vspResults) {
	console.log(e);             // Print the name
	console.log(vspResults[e]); // Print the score
}

console.log(vspResults.Karthik); // prints 99

