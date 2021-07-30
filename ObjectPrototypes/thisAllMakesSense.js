function foo() {
    //return an arrow function 
    return (a) => {
        //'a' is declared but its value is never read
        //`this` here is lexically inherited from `foo()
        console.log(this.a) // 2
            // console.log(this) // {a:2}
    }
}
var obj1 = { a: 2 }
var obj2 = { a: 3 }

var bar = foo.call(obj1)
bar.call(obj2) // 2 , not 3
    // bar.call() // -> is the same // 2

/*
    A program can effectively use both styles of code (lexical and this),
    but inside of the same function, and indeed for the same sorts of 
    look- ups, mixing the two mechanisms is usually asking for harder-to-
    maintain code, and probably working too hard to be clever.
*/

function foo() {
    var self = this // lexical capture of this
    setTimeout(function() {
        console.log(self.a)
    }, 100)
}

var obj = { a: 2 }
foo.call(obj) //2