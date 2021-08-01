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

////////////////////////////////////////////////////////////////

// vastly simplified  `mixin(...)` example :

function mixin(sourcedObj, targetObj) {
    for (var key in sourcedObj) {
        // only copy if not already present 
        if (!(key in targetObj)) {
            targetObj[key] = sourcedObj[key]
        }
    }
    return targetObj
}

var Vehicle = {
    engines: 1,

    ignition: function() {
        console.log('Turning on my engine.');
    },
    drive: function() {
        this.ignition()
        console.log(`Steering and moving forward!!!`)
    }
}

var Car = mixin(Vehicle, {
    wheels: 4,

    drive: function() {
        Vehicle.drive.call(this)
        console.log(
            'Rolling on all ' + this.wheels + 'wheels !!'
        );
    }
})

////////////                                                    

// alternate mixin less 'safe' to overwrites
function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        targetObj[key] = sourceObj[key]
    }
    return targetObj
}

var Vehicle = {
    //  . . .
}

//first created an empty object with
//Vehicle's stuff copied in 
var Car = mixin(Vehicle, {})

//now copy the intended contents into car 
mixin({
    wheels: 4,
    drive: function() {
        // ...
    }
}, Car)

////////////                                            

// "Traditional JS Class" `Vehicle`
function Vehicle() {
    this.engines = 1;
}
Vehicle.prototype.ignition = function() {
    console.log("Turning on my engine.");
};
Vehicle.prototype.drive = function() {
    this.ignition();
    console.log("Steering and moving forward!");
};
// "Parasitic Class" `Car`
function Car() {
    // first, `car` is a `Vehicle` var car = new Vehicle();
    // now, let's modify our `car` to specialize it
    car.wheels = 4;
    // save a privileged reference to `Vehicle::drive()`
    var vehDrive = car.drive;
    // override `Vehicle::drive()`
    car.drive = function() {
        vehDrive.call(this);
        console.log(
            "Rolling on all " + this.wheels + " wheels!");
        return car;
    }
    var myCar = new Car();
    myCar.drive();
    // Turning on my engine.
    // Steering and moving forward! 
    // Rolling on all 4 wheels


    ////////                                        

    var Something = {
        cool: function() {
            this.greeting = "Hello World";
            this.count = this.count ? this.count + 1 : 1;
        }
    };
    Something.cool();
    Something.greeting; // "Hello World" Something.count; // 1
    var Another = {
        cool: function() {
            // implicit mixin of `Something` to `Another`
            Something.cool.call(this);
        }
    };
    Another.cool()
    console.log(Another.greeting) // "Hello World"
    console.log(Another.count) // 1 (not shared state with `Something`)