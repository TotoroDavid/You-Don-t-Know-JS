var myObject = {
    //define a getter for `a`
    get a() {
        return 2
    }
}
myObject.a = 3
console.log(myObject.a) //  2
console.log(a) //not defined

///////                         

var myObj = {
    //define a getter for `a`
    get a() {
        return this._a_
    },
    //define a setter for `a`
    set a(val) {
        this._a_ = val * 2
    }
}

myObj.a = 2
console.log(myObj.a) // 4

/*
In this example, we actually store the specified value 2 of the 
assignment ([[Put]] operation) into another variable _a_. 
The _a_ name is purely by convention for this example and im‐ plies 
nothing special about its behavior—it’s a normal proper‐ ty like any other.
*/

/*
We can ask an object if it has a certain property without asking to 
get that property’s value:
*/
var myObj = {
    a: 2
}

// ('a' in myObj) // true
// ('b' in myObj) //false 

console.log(myObj.hasOwnProperty('a')) // true
console.log(myObj.hasOwnProperty('b')) // false

/////////                                       

var myObject = {}

Object.defineProperty(
    myObject,
    'a',
    // make `a` enumerable, as normal
    { enumerable: true, value: 2 }
)

Object.defineProperty(myObject,
    "b",
    // make `b` NON-enumerable
    { enumerable: false, value: 3 }
)

myObject.b //3
    ('b' in myObject) // true
myObject.hasOwnProperty('b') // true

// ....

for (var k in myObject) {
    console.log(k, myObject[k])
}
// 'a' 2

////////////////////////////////////////////////////////////////
var myArray = [1, 2, 3]

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// 1 2 3

////////////////////////////////////////////////////////////////

var myArray2 = [1, 2, 3]

for (var v of myArray2) {
    console.log(v)
}
// 1 2 3