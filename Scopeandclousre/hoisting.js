a = 2
var a
console.log(a) // 2

////

console.log(a) //undefined
var a = 2

/*
So, the best way to think about things is that all declarations,
both variables and functions, are processed first, before any part
of your code is executed.
*/

var a // undefined coz we just declared it 
console.log(a) // undefined
a = 2 // 2 but we use the execute before give a valor

function foo() {
    console.log(1) //1
}
foo()

foo = function() {
    console.log(2) // nothing just ignored it 
}

////

foo() // 3

function foo() {
    console.log(1);
}
var foo = function() {
    console.log(2);
}

function foo() {
    console.log(3)
}

//other example how the hosting works is 


foo(); // "b"
var a = true;
if (a) {
    function foo() { console.log("a"); }
} else {
    function foo() { console.log("b"); }
}