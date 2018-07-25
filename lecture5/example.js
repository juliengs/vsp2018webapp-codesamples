var myVar;

function setupTimeout(i) {
	
	return	function() {
		alert("Hello " + i);
	}

}

function cancelTimeout() {
	i = 0;
	clearTimeout(myVar);
}

for (var k=0; k<10; k++) {
	myVar = setTimeout(setupTimeout(k), 3000);
}
