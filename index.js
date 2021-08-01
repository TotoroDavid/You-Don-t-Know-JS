class coolGuy {
    specialTrick = nothing

    CoolGuy(trick) {
        specialTrick = trick
    }
    showOff() {
        output("here's my trick", specialTrick)
    }
}
Joe = new CoolGuy('jumping rope')
console.log(Joe.showOff()) // Here's my trick :  jumping rope