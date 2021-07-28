function foo() {
    var something = 'cool'
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something)
    }
    doSomething()

    function doAnother() {
        console.log(another.join('!'))
    }
    doAnother()
}
foo()