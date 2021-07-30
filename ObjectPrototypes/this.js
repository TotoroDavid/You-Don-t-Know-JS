const harry = {
    name: 'harry',
    greeting: () => {
        console.log(`hello, my name is ${this.name}`);
    }
}

const greeting = harry.greeting
greeting() //undefined ,hello, my name is undefined

///////
//! Implicit Binding
////////////////////////////////////////////////////////////////
function foo() {
    console.log(this.a);
    console.log(this) // 42
}

var obj2 = {
    a: 42,
    foo: foo
}
var obj1 = {
    a: 2,
    obj2: obj2
}

obj1.obj2.foo() //42

///////                                     

function foo() {
    console.log(this.a);
    console.log(this);
    console.log(a);
}

var obj = {
    a: 2,
    foo: foo
}

var bar = obj.foo // function reference "Alias"
var a = 'oops, global' // `a` also property on global object
bar() // oops global

///////                                                         

function foo() {
    console.log(this.a);
    console.log(this);
}

function doFoo(fn) {
    //fn is another reference to `foo`
    fn() // call-site
}
var obj = {
    a: 2,
    foo: foo
}

var a = 'oops, global' //`a` also property on global object
doFoo(obj.foo) // oops, global !!

///////                                 

function foo() {
    console.log(this.a)
}
var obj = {
    a: 2
}

foo.call(obj)
    /*
    Invoking foo with explicit binding by foo.call(..) allows us to force 
    its this to be obj.
    */

///////     

function foo() {
    console.log(this.a)
}
var obj = {
    a: 2
}

var bar = function() {
    foo.call(obj)
}

bar() // 2
setTimeout(bar, 100) //2

// hard-bound `bar` can no longer have its `this` overridden
bar.call() // 2

///////                                     

function foo(something) {
    console.log(this.a, something)
    return this.a + something
}

var obj = {
    a: 2
}

var bar = function() {
    return foo.apply(obj, arguments)
        // console.log(typeof arguments),
        // console.log(arguments)
}

var b = bar(3)
console.log(b)

// !Another way to express this pattern is to create a reusable helper:

function foo(something) {
    console.log(this.a, something)
    return this.a + something
}
//simple `bind` helper 
function bind(fn, obj) {
    return function() {
        return fn.apply(obj, arguments)
    }
}
var obj = {
    a: 2
}

var bar = bind(foo, obj)

var b = bar(3) // 2 3 
console.log(b) // 5

/*
bind(..) returns a new function that is hardcoded to call the original
function with the this context set as you specified.
*/

function foo(something) {
    console.log(this.a, something)
    return this.a + something
}
var obj = {
    a: 2
}
var bar = foo.bind(obj)

var b = bar(3)
console.log(b)