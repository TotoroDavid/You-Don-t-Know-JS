////                                                
// !that's the sequential async await method
////////////////////////////////////////////////////////////////////////////

const util = require('util')
const sleep = util.promisify(setTimeout)

module.exports = {

    async taskOne() {
        try {
            throw new Error('SOME PROBLEM')
            await sleep(4000)
                //Task one returned undefined
            return 'one value'
        } catch (e) {
            console.log(e)
        }
    },

    async taskTwo() {
        try {
            await sleep(2000)
            return 'two value'
        } catch (e) {
            console.log(e)
        }
    }

}

/////////////                       

////                                                
// !that's the parallel  async await method
////                                                

const util = require('util')
const sleep = util.promisify(setTimeout)

module.exports = {

    async taskOne() {
        try {
            throw new Error('SOME PROBLEM')
                // measuring time: 2.086s
            await sleep(4000)
                //Task one returned undefined
            return 'one value'
        } catch (e) {
            console.log(e)
        }
    },

    async taskTwo() {
        try {
            await sleep(2000)
            return 'two value'
        } catch (e) {
            console.log(e)
        }
    }

}