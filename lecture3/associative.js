// This illustrates how to use associative arrays

var VSPmarks = { 
	Karthik: 99,
	Julien: 98,
	Abraham: 97,
	Rafi: 96
}

function printMarks(assoc) {
	for (var elem in assoc) {
		console.log("Marks for " + elem);
		console.log("\t" + VSPmarks[elem]);
	}
}

printMarks(VSPmarks);


