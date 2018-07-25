// Simple Adder functions to illustrate closures
function Adder(val) {
    var value = val;
    return function(inc) {
	value = value + inc;
	return value;
    }
};

var f = Adder(5);
console.log( f(3) );
console.log( f(5) );

var f2 = Adder(100);
console.log( f2(2) );
console.log( f2(3) );

console.log( f(1) );

// Counter closure returning an object
function Counter(initial) {
    var val = initial;
    return {	
	increment : function() { val += 1; },
	reset: function() { val = initial; },
	get: function() { return val; }
    };
};

var f = Counter(5), g = Counter(10);
f.increment();
g.increment();
f.reset();
f.increment();
g.increment();
console.log( f.get() + "," + g.get() );

// Closure that keeps a pointer to the enclosing function itself
var MultiCounter = {
    create: function(initial) {
	
	var that = this;
	var val = [];	
	console.log(this);
	this.init = function() {
	    val = [];
	    for (var i=0; i<initial.length; i++) {
		val.push(  initial[i] );
	    };
	};
	this.init();
	return {
	    increment: function(i) { val[i] += 1; },
	    resetAll: function() { that.init(); },
	    getValues: function() { return val; }
	};
    }
};
var m = MultiCounter2.create( [1, 2, 3] );
m.increment(0);
m.increment(2);
m.increment(0);
m.resetAll();
m.increment(1);
console.log( m );
console.log( m.getValues() );

// Warning: BAD code! This function is broken. Functions MakeCounters2 and MakeCounters3 are better examples.
var MakeCounters1 = function(n) {
    var counters = [];
    for (var i=0; i<n; i++) {
	var val = i;
	counters[i] = {
	    increment: function() { val++; },
 	    get: function() { return val; },
	    reset: function() { val = i; }
	}
    }
    return counters;
} 
var m = MakeCounters1(10);
for (var i=0; i<10; i++) {
    document.writeln("Counter[ " + i + "] = " + m[i].get());
}

// This version works, but introduces two new fields in counters -- not the best idea
var MakeCounters2 = function(n) {
    var counters = [];
    for (var i=0; i<n; i++) {
	counters[i] = {
	    val : i,
	    initial : i,
	    increment: function() { this.val++; },
	    get: function() { return this.val; },
	    reset: function() { this.val = this.initial; }
	}
    }
    return counters;
} 
m = MakeCounters2(10);
for (var i=0; i<10; i++) {
    document.writeln("Counter[ " + i + "] = " + m[i].get());
}

// This function avoid the addition of two fields in counters
var MakeCounters3 = function(n) {
    var counters = [];
    for (var i=0; i<n; i++) {
	counters[i] = function( ) {
	    var initial = i, val = initial;
	    return {	
		increment: function() { val++; },
 		get: function() { return val; },
		reset: function() { val = initial; }
	    }
	}();	// Why do we need the parentheses () ?
    }
    return counters;
} 
m = MakeCounters3(10);
for (var i=0; i<10; i++) {
	document.writeln("Counter[ " + i + "] = " + m[i].get());
}
