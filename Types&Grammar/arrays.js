var a = [1, '2', [3]]

console.log(a.length) //3
console.log(a[0] === 1) // true
console.log(a[2][0] === 3) //true
    ////////////////////////////////////////////////////////////////    

var a = []

a.length //0

a[0] = 1
a[1] = '2'
a[2] = [3]

a.length //3

/////                                                           

var a = [];
a["13"] = 42;
console.log(a.length) // 14
console.log(a) //[ <13 empty items>, 42 ]

///     

function foo() {
    var arr = Array.prototype.slice.call(arguments)
    arr.push('bam')
    console.log(arr) // ['bam']
}

foo('bar', 'baz') //[ 'bar', 'baz', 'bam' ]

////                                                        !

var a = 42.300
var b = 42.0

console.log(a.toFixed(5)) // 42.30000
console.log(b) //42

///////                                                         
//!

console.log(Number.isInteger(42)) // true
console.log(Number.isInteger(42.000)) // true
console.log(Number.isInteger(42.3)) // false

/////                                               


var a, b, c, x, y, z;
[a, b, c] = foo();
({ x, y, z } = bar());
console.log(a, b, c);
console.log(x, y, z);