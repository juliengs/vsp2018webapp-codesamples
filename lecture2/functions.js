console.log(":: functions ::");

function areaOfCircle(radius) {
    var PI = 3.1416;
    return PI * square(radius);
}

function square(x) {
    return x*x;
}

var A = areaOfCircle(2);
console.log("Area of circle of radius 2 = " + A);

// ----------

function areaOfCircle2(radius) {
    var PI = 3.1416;
    
    function square(x) {
	return x*x;
    }
    
    return PI * square(radius);
}

var B = areaOfCircle2(2);
console.log("Area of circle of radius 2 = " + B);

// ----------

function areaOfCircle3(radius) {
    var PI = 3.1416;
    
    // This is a Nested function
    function PIsquare(x) {
	var sq = x * x;
	return PI * sq; 
    }
    
    return PIsquare(radius); 
}

var C = areaOfCircle3(2);
console.log("Area of circle of radius 2 = " + C);
