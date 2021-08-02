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