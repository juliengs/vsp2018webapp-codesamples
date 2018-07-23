// Example of different ways to call a function and prototype chains

function Point(x, y) {
	this.x = x;
	this.y = y;
	this.dist = function(point) {
		return Math.sqrt( (this.x - point.x) * (this.x - point.x)
				+ (this.y - point.y) * (this.y - point.y) );
	};
	return 0;	
};

var add = function(p1, p2) {
	console.log(this);
	return new Point(p1.x + p2.x, p1.y + p2.y);
};

var p1 = new Point(2, 3);
var p2 = new Point(5, 7);

console.log( "Distance between p1 and p2 = " + p1.dist(p2) );
var res1 = add(p1, p2);
console.log( "Add result (" + res1.x + "," + res1.y + ")" ); 

var addAll = function() {
        var p = new Point(0,0);
        for (var i = 0; i < arguments.length; i++) {
                var point = arguments[i];
		if (point.x==undefined || point.y==undefined) {
                        throw { etype: TypeError,
                                message: "Object " + point + " is not of type point",
                        	sum: p
			};      
                }       
                p.x += point.x; 
                p.y += point.y; 
        }               
        return p;
};             

var p3 = new Point(5, 4);
var p4 = new Point(11, 12);

try {
	var res2 = addAll(p1, p2, p3, "VSP", p4);
	console.log("Addall result = (" + res2.x + "," + res2.y + ")");
} catch (e) {
	console.log("Exception Type: " + e.etype);
	console.log("Exception Message: " + e.message);
	console.log("Partial (" + e.sum.x + " , " + e.sum.y + ")"); 
} 
