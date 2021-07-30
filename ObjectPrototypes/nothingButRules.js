function foo(el) {
    console.log(el, this.id);
}
var obj = {
    id: "awesome",
    name: 'name'
};
// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach(foo, obj);
// 1 awesome 2 awesome 3 awesome

///////                                 

function foo(a) {
    this.a = a
}
var bar = new foo(2)
console.log(bar.a);

///////                                 
function foo(a) {
    console.log(this.a)
}
var obj1 = {
    a: 2,
    foo: foo
}
var obj2 = {
    a: 3,
    foo: foo
}

obj1.foo() // 2 
obj2.foo() //3

obj1.foo.call(obj2) // 3  
obj2.foo.call(obj1) // 2

///////                         

function foo(something) {
    this.a = something
}
var obj1 = {
    foo: foo
}
var obj2 = {}

obj1.foo(2)
console.log(obj1.a) //2 <-- old parameter

obj1.foo.call(obj2, 3)
console.log(obj2.a) //3

var bar = new obj1.foo(4)
console.log(obj1.a) // 2 old parameter 
console.log(bar.a) // 4 new one we used bar

///////                                 
function foo(something) {
    this.a = something
}
var obj1 = {}

var bar = foo.bind(obj1) //<-- first we declared 
bar(2)
console.log(obj1.a) //  2 

var baz = new bar(3) // <--- new one 
console.log(obj1.a) //2 bar 
console.log(baz.a) //3 new bar

///////                             

function foo(p1, p2) {
    this.val = p1 + p2
    console.log(this.val);
}

// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
var bar = foo.bind(null, 'p1')
var baz = new bar('p2')

baz.val // p1p2


/////                   

function foo() {
    console.log(this.a)
}

var a = 2

foo.call(null) //2

/////                       

function foo(a, b) {
    console.log('a:' + a + ',b:' + b)
}

// spreading 
foo.apply(null, [2, 3]) // a:2, b:3

// currying with `bind`(...)
var bar = foo.bind(null, 2)
bar(3) // a:2, b:3

// or we can to use `DMZ` empty object

function foo(a, b) {
    console.log('a:' + a + ',b:' + b)
}

//our DMZ empty object
var ø = Object.create(null)

// spreading out array as parameters!!
foo.apply(ø, [2, 3]) // a:2, b:3

// currying with `bind`(...)
var bar = foo.bind(ø, 2)
bar(3) // a:2, b:3

/////                                           

function foo() {
    console.log(this.a)
        //console.log(this) --> // 2
}
var a = 2
var o = { a: 3, foo: foo }
var p = { a: 4 }

o.foo(); //3
(p.foo = o.foo)() //2
/*
finally `p` doesn't have a foo:foo so at the end this is 2 
call-site is just foo(), not p.foo() or o.foo() as you might expect.
Per the rules mentioned earlier, the default binding rule applies.
*/