function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "hello I'm " + identify.call(this)
    console.log(greeting)
}
var me = {
    name: 'Kyle'
}
var you = {
    name: 'reader'
}
identify.call(me) // KYLE
    /*
    here we invoke a function and the function do his jod 
    */
identify.call(you) //READER

speak.call(me) //hello I'm KYLE
speak.call(you) //hello I'm READER

////////////////////////////////

function identify() {
    return context.name.toUpperCase()
}

function speak(context) {
    var greeting = "hello, I'm" + identify(context)
    console.log(greeting);
}

var me = {
    name: 'Kyle'
}
var you = {
    name: 'reader'
}

identify(you)
speak(me)

/////////////

function foo(num) {
    console.log('foo:' + num);
    // keep track of how many times `foo` is called
    this.count++
}
foo.count = 0
var i = 0

for (i = 0; i < 10; i++) {
    if (i > 5) {
        /*
        !we don't used `call` 
        !foo.call(foo,i)
        */
        foo(i)
    }
}
// foo:6
// foo:7
// foo:8
// foo:9

//how many times was `foo` called?
console.log(foo.count) // 0 ---wtf

/*

the first function 
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i)
    }
} the result in the end is `i` is 5, so after that so the function says 
finish when i < 10, that's why the result is 
// foo:6
// foo:7
// foo:8
// foo:9

console.log(foo.count) // 0 ---wtf
and when we invoke the function we declare it before and saying that's 
foo.count = 0
that's why in the end the result is `0`

*/

function foo(num) {
    console.log(`foo ${num}`);
    data.count++
}
var data = {
    count: 0
}
var i

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i)
    }
}
// foo 6
// foo 7
// foo 8
// foo 9

//how many times was `foo` called?
console.log(data.count) // 4


////////////////////////////////
// another solution is  . . . .

function foo(num) {
    console.log('foo' + num)
        // keep track of how ,many times `foo` is called
    foo.count++
}

foo.count = 0

var i

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i)
    }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo.count)

// the correct way to used this is the next way

function foo(num) {
    console.log('foo' + num)
        // keep track of how many times `foo` is called 
        // Note: `this` IS actually `foo` now, based on 
        // how `foo` is called (see below)
    this.count++
}

foo.count = 0

var i

for (i = 0; i < 10; i++) {
    if (i > 5) {
        // !using `call(..)`, we ensure the `this`
        // !points at the function object (`foo`) itself
        foo.call(foo, i)
    }
}

// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo.count)

/////////////

function baz() {
    //call-stack is : `baz`
    // so our call site is in the global scope 
    console.log('baz')
    bar()
}

function bar() {
    //call stack is : `bar` -> `bar`
    //so our call site is in baz
    console.log('bar')
    foo()
}

function foo() {
    //call stack is `baz`  -> `bar` -> `foo`
    // so our call-site is in `bar`
    console.log('foo');
}
baz()

// in the before example we could appreciate how a chain works