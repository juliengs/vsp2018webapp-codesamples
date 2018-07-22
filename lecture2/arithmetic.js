console.log(":: arithmetic.js ::");

var foo = 5;
foo = foo + 1 - 2 * (4 - 1);
console.log(foo); // 0

var bar = 4;
bar += bar++;
console.log(bar); // 8

var baz = 4;
baz += ++baz;
console.log(baz); // 9
