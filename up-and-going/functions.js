// Function



/*
    function printAmount() {
    console.log(amount.toFixed(2))
}
var amount = 99.99

printAmount()

// or we can use arrow function

const printAmount = () => {
    var amount = 99.99
    return (
        console.log(amount.toFixed(2))
    )
}
printAmount()


function printAmount(amt) {
    console.log(amt.toFixed(2))
}

function formatAmount() {
    return '$' + amount.toFixed(2)
}
var amount = 99.99
printAmount(amount * 2) //`199.98`

amount = formatAmount()
console.log(amount) // $99.99

/////////////////////////////
const TAX_RATE = 0.08

function calculateFinalPurchasedAmount(amt) {
    //calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE)
    return amt
}
var amount = 99.99

amount = calculateFinalPurchasedAmount(amount)

console.log(amount.toFixed(2))

//or if we used the arrow function 

const calculate = (amt) => {
    const TAX_RATE = 0.08
    amt = amt + (amt * TAX_RATE)
    return amt
}
var amount = 99.99
amount = calculate(amount)
console.log(amount.toFixed(2)) // '107..99'

*/

(function boo() {
    console.log('hello')
})()
/*

function foo() { .. }
-// `foo` function reference expression, // then `()` executes it
foo();
-// `IIFE` function expression, // then `()` executes it (function IIFE(){ .. })()

*/

function makeAdder(x) {
    function add(y) {
        return y + x
    }
    return add
}

/////////////////////

function User() {
    var username, password

    function doLogin(user, pw) {
        username = user
        password = pw
    }
    var publicAPI = {
        login: doLogin,
    }
    return publicAPI
}
var fred = User()
fred.login('dave', '1234f')