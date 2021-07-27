/*

Write a program to calculate the total price of your phone pur‐ chase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accesso‐ ries for each phone as long as your purchase amount is below your mental spending threshold.
• After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly for‐ matted.
• Finally, check the amount against your bank account balance to see if you can afford it or not.
• You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.”
• You should define functions for calculating the tax and for for‐ matting the price with a “$” and rounding to two decimal places.
• Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in “Input” on page 6. You may prompt the user for their bank account balance, for exam‐ ple. Have fun and be creative!

*/

const SPENDING_THRESHOLD = 200
const TAX_RARE = 0.08
const PHONE_PRICE = 99.99
const ACCESSORY_PRICE = 9.99

var bank_balance = 303.91
var amount = 0

const calculateTax = (amount) => {
    return amount * TAX_RARE
}

const formatAmount = (amount) => {
        return '$' + amount.toFixed(2)
    }
    // keep buying phones while you still have money 
while (amount < bank_balance) {
    //buy a new phone!
    amount = amount + PHONE_PRICE

    // can we afford the accessory ?
    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE
    }
}
// don't forget to pay the government, too'
amount = amount + calculateTax(amount)

console.log(
        'your purchase :' + formatAmount(amount)
    ) //your purchase is $334.76

//can you actually afford this purchase ?
if (amount > bank_balance) {
    console.log(
        `you cannot afford this purchase`
    )
}

/*
You need operators to perform actions on.
• You need values and types to perform different kinds of actions
like math on numbers or output with strings.
• You need variables to store data (aka state) during your pro‐
gram’s execution.
• You need conditionals like if statements to make decisions.
• You need loops to repeat tasks until a condition stops being true.
• You need functions to organize your code into logical and reusa‐ ble chunks.
*/