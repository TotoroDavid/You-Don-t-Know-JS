//ARRAYS

var myArray = ["foo", 42, "bar"];
myArray.length; // 3
myArray[0]; // "foo"
myArray[2]; // "bar"

/////

var myArray = ['foo', 42, 'bar']

myArray.baz = 'baz'
console.log(myArray.length) //3
console.log(myArray.baz) //baz
console.log(myArray)
console.log(myArray.length) //3

////                                

var myObject = {}

Object.defineProperty(myObject, 'a', {
    value: 2,
    writable: true,
    // writable: false, // not writable !!!
    /*
    The ability for you to change the value of a 
    property is controlled by writable.
    */
    configurable: true,
    enumerable: true
})
myObject.a = 3
console.log(myObject.a)
    /*
    it depends if the writable is true or false it will be `2` or `3`
    */
console.log(myObject)

////////////////////////////////

var myObj = {
    a: 2
}
myObj.a = 3
console.log(myObj.a) //3

Object.defineProperty(myObj, 'a', {
    value: 4,
    writable: true,
    configurable: false, // no configurable
    enumerable: true,
})
console.log(myObj.a) // 4
myObj.a = 5
console.log(myObj.a) // 5

Object.defineProperty(myObj, 'a', {
        value: 6,
        writable: true,
        configurable: true,
        enumerable: true,
    }) //  TypeError: Cannot redefine property: a

/*
    Another thing configurable:false prevents is the ability to use
    the delete operator to remove an existing property:
*/


var myObj = {
    a: 2
}
myObj.a // 2

delete myObj.a
myObj.a // undefined

Object.defineProperty(myObj, 'a', {
    value: 2,
    writable: true,
    configurable: false, // no configurable
    enumerable: true,
})

myObj.a //2
delete myObj.a
myObj.a //2

/*
As you can see, the last delete call failed (silently) because we made
the a property non configurable.
*/


//!Immutability
// example
myImmutableObject.foo; // [1,2,3] 
myImmutableObject.foo.push(4);
myImmutableObject.foo; // [1,2,3,4]