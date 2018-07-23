// This illustrates common array operations

var a = [5, 1, 3, 48, 29, 40, 30, 1, 25, 10 ];

function arraySum(arr) {
	var sum = 0;
	// compute sum here
	for (var i = 0; i<arr.length; i++)
		sum += arr[i];
	return sum;
}

function maxArray(arr) {
	if (arr.length==0) return 0;
	var max = arr[0];
	// compute max here
	for (var i =0; i<arr.length; i++) {
		if (max < arr[i]) max = arr[i];
	}
	return max;
}

function printArray(arr) {
	var i;
	console.log("Length = " + arr.length);
	for (i=0; i<arr.length; i++) {
		console.log("\ta[ " + i + "] = " + arr[i]);
	}
}		

printArray(a);
console.log(arraySum(a)); 
console.log(maxArray(a));

