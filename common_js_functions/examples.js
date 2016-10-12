//FizzBuzz 
for (var i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


//99 bottles of beer

for (var i = 99; i > 0; i--)
    if (i === 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.");
    } else if (i === 1) {
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
} else {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
}


//Powers of Two
function powersOfTwo_For(n) {

    var arr = [];
    for (var i = 0; i <= n; i++) {
        var squaredNum = Math.pow(2, i);
        arr.push(squaredNum);

    }
    return arr; //why use return?
}
console.log("powersOfTwo_For(4) returns: ", powersOfTwo_For(4));




//Sorting & Pushing array with forEach 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var otherNumbers = [2, 3, 7, 9];

numbers.forEach(function(d) {
    if (otherNumbers.indexOf(d) == -1) {
        otherNumbers.push(d)
    }
});

otherNumbers.sort();
console.log(otherNumbers);


// Using ..FOREACH() poplulate the countItems function with the code needed to search the arr Array
// and find all instances of the word "apple"

// ASSUMPTIONS: the elements in the array will be either strings or arrays containing strings. 

var arr = ["apple", ["apple", "fix", "apple"],
    ["Apple"]
];

function countItems(arr, item) {
    //console.log(arr.length)
    var count = 0;
    var item = item.toLowerCase();

    arr.forEach(function(d, i) {
        if (typeof d === "string" && d.toLowerCase() === item) {
            count += 1;
        } else {
            d.filter(function(d) {
                if (d.toLowerCase() === item) {
                    count += 1;
                }
            });
        }
    });

    return count;
}

console.log(countItems(arr, "apple"));