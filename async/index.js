////                                                
// !that's the sequential async await method
////////////////////////////////////////////////////////////////////////////

const { taskOne, taskTwo } = require('./tasks')

async function main() {

    try {
        console.time('measuring time')
        const valueOne = await taskOne()
        const valueTwo = await taskTwo()
        console.timeEnd('measuring time')
            //measuring time: 6.012s

        console.log('Task one returned', valueOne)
        console.log('Task two returned', valueTwo)
    } catch (e) {
        console.log(e)
    }

}

main()
    // Task one returned one value
    // Task two returned two value


/////////////       

////                                                
// !that's the parallel  async await method
////                                                

const { taskOne, taskTwo } = require('./tasks')

async function main() {

    try {
        console.time('measuring time')
        const results = await Promise.all([taskOne(), taskTwo()])
        console.timeEnd('measuring time')
            //measuring time: 4.005s

        console.log('Task one returned', results[0])
        console.log('Task two returned', results[1])
    } catch (e) {
        console.log(e)
    }

}

main()
    // Task one returned one value
    // Task two returned two value