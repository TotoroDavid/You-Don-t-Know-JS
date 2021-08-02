/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
*/

//A callback is a function passed as an argument to another function.


function callback() {
    console.log('yo soy un callback')
}

function message(fn) {
    fn()
}
message(callback)

////////////                                    
////////////                                    

//-example

function myFirst() {
    console.log('hello');
}

function mySecond() {
    console.log('Goodbye');
}

myFirst()
mySecond()

/////////////

function myDisplayer(some) {
    console.log(some)
}

function myCalculator(num1, num2) {
    let sum = num1 + num2
    return console.log(sum)
}
let result = myCalculator(5, 5)

////////////                                    

//callback

function function1(fn) {
    setTimeout(function() {
        console.log('message No1')
        fn()
    }, 1000)
}

function function2() {
    console.log('message No2')
}

function1(function2)
    // message No1
    // message No2