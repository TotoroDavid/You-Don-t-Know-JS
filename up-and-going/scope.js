//!SCOPE 

/*

    var a = 2

const one = () => {
    var a = 1
    console.log(a)
}
const two = () => {
    // const a = 2
    console.log(a)
}

one()
two()

-exampleNo2

var fruit = 'Apple'

function eat() {
    var fruit = 'Banana'

    if (true) {
        let fruit = 'pear'
        console.log(fruit)
    }
    console.log('eating' + fruit)
}

eat()

--example No3

function one() {
    var a = 1

    function two() {
        var b = 2
            //we can access both `a` and `b` here
        console.log(a + b) //3
    }
    two()
        //we can only access `a` here
    console.log(a) //1
}
one()

*/

/*
    --hoisting
var a = 2
foo()

function foo() {
    a = 3
    console.log(a)
    var a
}
console.log(a)

////
that's the same than 

var a = 2

const foo = () => {
    var a
    a = 3
    console.log(a)
}
foo()
console.log(a)


*/