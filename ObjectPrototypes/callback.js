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

////////////////////////////////                            !
////////////////////////////////                            !

/// advance example 
/*
in this simple example we can appreciate how in a simple callback consult 
we have to make a lot of code 
*/

function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
        if (err) {
            res.send(err)
        } else {
            Tasks.findById(user.tasksId, function(err, tasks) {
                if (err) {
                    return res.send(err)
                } else {
                    tasks.completed = true
                    tasks.save(function(err) {
                        if (err) {
                            return res.send(err)
                        } else {
                            res.send('Task completed')
                        }
                    })
                }
            })
        }
    })
}

/*
that's the same code than what made before but the only different is
now we are using promises !!! 
so if we compare  both of them we can see how the code is better and must 
organize
*/

function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function(user) {
            return Tasks.findById(user.tasksId)
        })
        .then(function(tasks) {
            tasks.completed = true
            return tasks.save()
        })
        .then(function() {
            res.send('Task completed')
        })
        .catch(function(errors) {
            res.send(errors)
                //*the same errors we used for all callbacks !!
        })
}

///!async await way
/*
    and in the end we should to used async, await and our code will be e
    must clean and organize than the others 
    if we compared we have 3 different ways to make it 
*/

async function requestHandler(req, res) {
    try {
        const user = await User.findById(req.userId)
        const tasks = await Task.findById(user.tasksId)
        tasks.completed = true
        await tasks.save()
        res.send('Task completed')
    } catch (error) {
        res.send(error)
    }
}