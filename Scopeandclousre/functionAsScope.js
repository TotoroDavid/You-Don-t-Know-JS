undefine = true

function IIFE(undefine) {
    var a
    if (a === undefine) {
        console.log(`undefined is safe here`);
        console.log(a); //undefined 
        console.log(undefine); //undefined
    }
}
IIFE()

/////////////

for (var i = 0; i < 10; i++) {
    console.log(i);
}
/*
We declare the variable i directly inside the for loop head, most likely
because our intent is to use i only within the context of that for loop, and essentially ignore the fact that the 
variable actually scopes itself to the enclosing scope (function or global).
*/

var foo = true

if (foo) {
    var bar = foo * 2
    bar = something(bar)
    console.log(bar);
}

////

try {
    undefined() // no defined
} catch (error) {
    console.log(error) // works
}
console.log(error) // referenceError : `error ` not found

/*
As you can see, err exists only in the catch clause, and throws an error
when you try to reference it elsewhere.
*/



////////////////////////////////////////////////////////////////

{
    console.log(bar)
        /*
        ReferenceError: Cannot access 'bar' before initialization
        */
    let bar = 2
}

//// 

var foo = true,
    baz = 10

if (foo) {
    var bar = 3

    if (baz > bar) {
        console.log(baz)
    }
}

//// that's the same code

var foo = true,
    baz = 10

if (foo) {
    var bar = 3
}
if (baz > bar) {
    console.log(baz)
    console.log(bar)
}

/////////////

var foo = true

if (foo) {
    var a = 2
    const b = 3

    a = 3 //just fine 
    b = 4 //error!
    console.log(b) // 3
        /*
            
        */
}
console.log(a) //3
console.log(b) // referenceError