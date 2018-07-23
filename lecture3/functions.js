// This is an example of a higher-order function
var map = function( array, fn ) {
        // Applies fn to each element of list, returns a new list
        var result = [];
        for (var i = 0; i < array.length; i++) {
                var element = array[i];
                result.push( fn(element) );
        }
        return result;
};

var l = [3, 1, 5, 7, 2];
console.log( map(l, function(num) { return num + 10; }) );

var add = function(a, b) {
	return a + b;
};

// This is an example of function currying
var add20 = add.bind(null, 20);
console.log( map(l, add20) )

// Solution to the class activity for the filter function is below;
var filter = function( array, fn ) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
                var element = array[i];
                if (fn(element) ) result.push(element);
        }
        return result;
};

var lesserThan = function(a, b) { return (a < b) ? true:false; }
var greaterThan5 = lesserThan.bind(null, 5);

var a = [ 1, 3, 10, 8, 2, 7, 6 ];
console.log(a);
var c = filter( a, greaterThan5);
console.log(c);



