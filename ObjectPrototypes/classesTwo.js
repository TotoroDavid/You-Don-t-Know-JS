class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`hey my name is ${this.name} and I have ${this.age}`)
    }
}

let person = new Persona('Dave', 23)
person.greeting() //hey my name is Dave and I have 23

/////                                           
//!static method

class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`hey my name is ${this.name} and I have ${this.age}`)
    }

    static definition() {
        console.log('a person is an human!!')
    }
}

Persona.definition() //a person is an human!!

///////                                                     
////////////////////////////////                            
//!extensions class 

class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`hey my name is ${this.name} and I have ${this.age}`)
    }

    static definition() {
        console.log('a person is an human!!')
    }
}

class Developer extends Persona {
    // . . .
}

Developer.definition() //a person is an human!!

////////                    
//another example

class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`hey my name is ${this.name} and I have ${this.age}`)
    }

    static definition() {
        console.log('a person is an human!!')
    }
}
class Developer extends Persona {

    developerGreeting() {
        this.greeting()
        console.log(`I'm a web developer!!`);
    }
}

let developer = new Developer('Dave', 23)
developer.developerGreeting()
    // hey my name is Dave and I have 23
    // I'm a web developer!!


////////////////////////////////!

/*
////////////////////////////////                                
constructor method !!!
*/

class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`hey my name is ${this.name} and I have ${this.age}`)
    }

    static definition() {
        console.log('a person is an human!!')
    }
}
class Developer extends Persona {

    constructor(name, age, type) {
        super(name, age)
        this.type = type //remember define `type`
    }

    developerGreeting() {
        this.greeting()
        console.log(`I'm a ${this.type} developer!!`);
    }
}

let developer = new Developer('Dave', 23, 'frontEnd')
developer.developerGreeting()
    // hey my name is Dave and I have 23
    // I'm a frontEnd developer!!

///////                                                     

/*
////////////////////////////////                                
SUPER !!!!
*/

class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`hey my name is ${this.name} and I have ${this.age}`)
    }

    static definition() {
        console.log('a person is an human!!')
    }
}
class Developer extends Persona {

    constructor(name, age, type) {
        super(name, age)
        this.type = type //remember define `type`
    }

    developerGreeting() {
        this.greeting() // we use here 'super'
        console.log(`I'm a ${this.type} developer!!`);
    }

    greeting() {
        console.log('hello from sub-class Developer class');
    }
}

let developer = new Developer('Dave', 23, 'frontEnd')
developer.developerGreeting()
    // hey my name is Dave and I have 23
    // I'm a frontEnd developer!! 
    // !or if we used `this` and not `super`
    // hello from sub-class Developer class
    // I'm a frontEnd developer!!

///////                                 

// getters and setters
class Square {
    constructor(_width) {
        this.width = _width
        this.height = _width
        this.numOfRequestForArea = 0
    }
    get area() {
        this.numOfRequestForArea++
            return this.width * this.height
    }
    set area(area) {
        this.width = Math.sqrt(area)
        this.height = this.width
    }
}
let square1 = new Square(4)
    // console.log(square1.area) // 625
square1.area = 25
    // console.log(square1.width) // 5
    // console.log(square1.height) // 5