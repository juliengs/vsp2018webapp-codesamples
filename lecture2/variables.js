console.log(":: variables.js ::");

var foo = 0;
console.log(foo); // 0

foo = foo + 2;
console.log(foo); // 2

foo = "My name is ";
foo += "Julien";
console.log(foo); // "My name is Julien"

var bar = foo + ":-)"
console.log(bar); // "My name is Julien :-)"
