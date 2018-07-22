console.log(":: classactivity.js ::");

function getRandomInt(min, max) {
    min = Math.ceil(min); max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
}

function randomArray(n, min, max) {
    var arr = [];
    for (var i=0; i<n; i++)
	arr.push(getRandomInt(min, max));
    return arr;
}

/* Note: taken from https://khan4019.github.io/front-end-Interview-Questions/sort.html
   sortArray uses the Bubble Sort algorithm which is O(n^2).
   The function will alter the original array. A copy could be made first if this is to
   be avoided. */
function sortArray(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

// Test code:
var arr = randomArray(10, 0, 50);
var sortedArr = sortArray(arr);
console.log(sortedArr);
