
// BONUS 1: Can you write another predicate function that counts evens?

function makeCountingFunction(predicate) {
	return function(arr){
		var counter= 0;
		arr.forEach(function(d){
		if(isEven(d)) { counter++ }
	});
	return counter
	
	}
}

function isOdd(num) {return num % 2 == 1}
function isEven(num) { return num % 2 == 0 } 

var countTheEvens = makeCountingFunction(isEven);
var evenCount = countTheEvens([1, 2, 3, 4, 5, 6, 7]);
console.log('There are ' + evenCount + ' even numbers.');