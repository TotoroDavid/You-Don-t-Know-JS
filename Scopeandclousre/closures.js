function makeCounter() {
    let counter = 0
    return function increment() {
        counter++
        return console.log(counter)

    }
}
const counter1 = makeCounter()
counter1()
counter1()
counter1()
counter1()
const counter2 = makeCounter()
counter2()

////////////////////////////////////////////////////////////////

function makeCounter() {
    let counter = 0

    return {
        increment: function() {
            counter++
            return console.log(counter)
        },
        decrement: function() {
            counter--
            return console.log(counter)
        },
        getValue: function() {
            console.log(counter);
        }
    }
}

const counter1 = makeCounter()
counter1.increment() // 1
counter1.increment() // 2
counter1.increment() // 3
counter1.increment() // 4
counter1.decrement() // 3
counter1.decrement() // 2
counter1.decrement() //1
counter1.getValue() // oops is 1 !!

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function makePrint(type, styles) {
    return function msm(str) {
        console.log(`%c ${type}:${str}`, styles);
    }
}
const err = makePrint('Error', 'background: red; color: white')
err()

/////////////////////////////////////
////////////////////////////////

function foo() {
    var a = 2

    function baz() {
        console.log(a)
    }
    bar(baz)
}

function bar(fn) {
    fn() // is a closure
}
foo() // 2


////////////////////////////////////////////////////////////////
//that's the same than the next function

var fn

function foo() {
    var a = 2

    function baz() {
        console.log(a)
    }
    fn = baz // assign baz to global variable 
}

function bar() {
    fn() // look, closure!
}
foo()
bar()

////////////////////////////////
function wait(message) {

    setTimeout(function timer() {
        console.log(message)
    }, 1000)
}
wait('hello, closure!!')

////////////////////////////////
/*
!in the next exercise we should to appreciate how closure works  
*/

for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i); // 6,6,6,6, ....
    }, i * 1000)
    console.log(i); //1,2,3,4 . . . . 
} /// it doesn't work how we want 

/////////////

for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}
/*
in the end is the same, but what it change is we use `let` and don't `var`
*/


for (var i = 0; i <= 5; i++) {
    (function() {
        setTimeout(function timer() {
                console.log(i)
            }, i * 1000) // 6,6,6,6 . . .
    })()
} /// same than the before

////////////////////////////////////////////////////////////////

for (var i = 0; i <= 5; i++) {
    (function() {
        var j = i
        setTimeout(function timer() {
            console.log(j) // 0, 1, 2, 3 ... 5
        }, j * 1000)
    })()
}

// or we can make it more slight


for (var i = 0; i <= 5; i++) {
    (function(j) { // block-scope for closure
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000)
    })(i)
}

//  ====>
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}