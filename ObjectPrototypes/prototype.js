var anotherObjet = {
        a: 2
    }
    //create an object linked to `anotherObject`
var myObj = Object.create(anotherObjet)

console.log(anotherObjet.a) //2
console.log(myObj.a) //2

console.log(anotherObjet.hasOwnProperty('a')) //true
console.log(myObj.hasOwnProperty('a')) // false

myObj.a++ //oops, implicit shadowing!

    console.log(anotherObjet.a) //2
console.log(myObj.a) //3

console.log(myObj.hasOwnProperty('a')) // true

////////////////////////////////                 

function Foo() {
    //  . . .
}
var a = new Foo()

console.log(Object.getPrototypeOf(a) === Foo.prototype) // true

////////////////////////////////                        

function NothingSpecial() {
    console.log("Don't mind me !!")
}
var a = new NothingSpecial()
    // Don't mind me !!
console.log(a) //NothingSpecial {}

///////                                                     

function Foo(name) {
    this.name = name
}
Foo.prototype.myName = function() {
    return this.name
}

var a = new Foo('a')
var b = new Foo('b')

console.log(a.myName()) //a
console.log(b.myName()) //b

///////                                         

function Foo() { /*..*/ }

Foo.prototype = { /*..*/ } // create a new prototype object

var a1 = new Foo()
console.log(a1.constructor === Foo) //false
console.log(a1.constructor === Object) //true


//////////                                                  
function Foo(name) {
    this.name = name
}
Foo.prototype.myName = function() {
    return this.name
}

function Bar(name, label) {
    Foo.call(this, name)
    this.label = label
}

//here, we make a new `Bar.prototype`
//linked to Foo.prototype
Bar.prototype = Object.create(Foo.prototype)

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!

Bar.prototype.myLabel = function() {
    return this.label
}

var a = new Bar('a', 'obj a')


console.log(a.myName())
console.log(a.myLabel())