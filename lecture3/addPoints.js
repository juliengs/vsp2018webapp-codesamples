var Point = function(x,y)  {
	this.x = x;
  this.y = y;
}

var p1 = new Point(1,1);
var p2 = new Point(2,2);
var p3 = new Point(undefined,3);

var addAll = function() {
	var p = new Point(0,0);
  for (var i=0; i<arguments.length; i++) {
  	var point = arguments[i];
    // TODO: return current sum of points up
    // to the first occurence of an error
    // while throwing the exception
    if (point.x === undefined ||
    	point.y === undefined)
    {
    	throw {
      	name: TypeError, 
      	message: "Error",
        Pt:p
      };
    }
    p.x += point.x;
    p.y += point.y;
  }
  return p;
}

try {
	var sumPoint = addAll(p1,p2,p3);
  console.log(sumPoint);
} catch (exception) {
	console.log(exception.Pt);
}
