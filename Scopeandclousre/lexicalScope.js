/*
    encompasses the global scope and has just one identifier
    in it: foo.
*/
function foo(a) { // scope a , bar and b
    var b = a * 2

    function bar(c) { // scope of bar just c
        console.log(a, b, c)
    }
    bar(b * 3)
}
foo(2) // 2 , 4 , 12

/////////////

function foo(str, a) {
    eval(str)
    console.log(a, b)
}
var b = 2

foo('var b = 3', 1) // 1 , 3

/////////////

function foo(str) {
    'use strict'
    eval(str)
    console.log(a) // is not defined at foo
}
foo('var a = 2')

////////////////////////////////

/*

var obj = {
        a: 1,
        b: 2,
        c: 3
    }
    // more tedious to repeat obj
obj.a = 2
obj.b = 3
obj.c = 4
    // `easier` short-hand
with(obj) {
    a = 2
    b = 3
    c = 4
}

*/

function foo(obj) {
    with(obj) {
        a = 2
    }
}
var o1 = {
    a: 3
}
var o2 = {
    b: 3
}
foo(o1)
console.log(o1.a) //2

foo(o2)
console.log(o2.a) //undefined
console.log(a) // 2 -oops, leaked global

////
/*
in the last code in the last console.log we got 
2 and that's happen because I was using `with`

in the next example I will make the same code 
but in this time I will not use `with`

*/
function foo(obj) {
    a = 2
}
var o1 = {
    a: 3
}
var o2 = {
    b: 3
}
foo(o1)
console.log(o1.a) //2

foo(o2)
console.log(o2.a) //undefined
console.log(a) // 2 -oops, leaked global


/*

function foo() {
    function bar(a) {
        i = 3 // changing the `i` in the enclosing scope
            //for loop
        console.log(a + i)
    }
    for (var i = 0; i < 10; i++) {
        bar(i * 2) //oops infinity loop ahead 
    }
}
foo()

*/

setTimeout(function() { // no name 
    console.log('I waite 1 second')
}, 1000)

// we call that an anonymous function

setTimeout(function time() { // <-- I have a name 
    console.log(`i waited 1 second `)
}, 1000)