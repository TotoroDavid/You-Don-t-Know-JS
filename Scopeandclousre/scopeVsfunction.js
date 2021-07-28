function foo(a) {
    var b = 2;
    // some code
    function bar() { // ...
    }
    // more code
    var c = 3;
}

bar(); // fails
console.log(a, b, c); // all 3 fail

////////////////////////////////

function doSomething(a) {
    b = a + doSomethingElse(a * 2)
        // b = 2 (2*2) => b = 2 + (4) => 6 
        // doSomethingElse -1  => 2 +(3)
    console.log(a) // 2
    console.log(b) // 5
    console.log(b * 3) // 15
}

function doSomethingElse(a) {
    return a - 1
}

var b

doSomething(2)

// the next code is the same than the previous but in this time will be in the same
//a better way

function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1
        console.log(a) // nothing happen 
    }
    var b
    b = a + doSomethingElse(a * 2)
    console.log(a) // 2
    console.log(b) //5
    console.log(b * 3) //15
}
doSomething(2)

/*
doSomethingElse(2) //doSomethingElse is not defined
because is still in the local scope 
*/