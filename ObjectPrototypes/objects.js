// The literal syntax for an object looks like this:
var myObj = {
    key: value
        // ...
};
// The constructed form looks like this:
var myObj = new Object();
myObj.key = value2

console.log(myObj.key);
////////                        

typeof strPrimitive; // "string" strPrimitive instanceof String; // false
var strObject = new String("I am a string");
typeof strObject; // "object"
strObject instanceof String; // true
// inspect the object sub-type
Object.prototype.toString.call(strObject); // [object String]

////////////////////////////////////////////////////////////////

var myObject = {
    a: 2
};
myObject.a; // 2
myObject["a"]; // 2

/////           
var myObj = {}

myObj[true] = 'foo'
myObj[3] = 'bar'
myObj[myObj] = 'baz'

myObj[true] // 'foo'
myObj[3] // 'bar'
myObj[myObj] // 'baz'

///////                                         
var prefix = 'foo'

var myObject = {
    [prefix + 'bar']: 'hello',
    [prefix + 'baz']: 'world'
}
console.log(myObject['foobar']) //hello
console.log(myObject['foobaz']) //world

////                                    

function foo() {
    console.log("foo");
}
var someFoo = foo; // variable reference to `foo` 
var myObject = {
    someFoo: foo
};
foo; // function foo(){..}
someFoo; // function foo(){..}
myObject.someFoo; // function foo(){..}

///////                                 
var myObject = {
    foo: function() {
        console.log("foo");
    }
};
var someFoo = myObject.foo;
someFoo; // function foo(){..} 
myObject.foo; // function foo(){..}

////                     

var myObj = {
    // define a getter fo `a`
    get a() {
        return 2
    }
}
Object.defineProperty(
    myObj, //target
    'b', //property name
    {
        //define a getter fo `b`
        get: function() { return this.a * 2 },
        // make sure `b` shows up as a n object property
        enumerable: true,
    }
)
console.log(myObj.a) //2
console.log(myObj.b) //4