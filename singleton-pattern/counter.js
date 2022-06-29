let patternInstance = null
let counter = 0

class Counter{
    constructor(){
        if(patternInstance){
            throw new Error("Instance is already created")
        }
        patternInstance = this
    }

    getInstance(){
        return this
    }

    increment(){
        return ++counter
    }

    decrement(){
        return --counter
    }

    count (){
        return counter
    }
}

// we are freezing this object so that no one can modify the properties of this object
const counterObj = Object.freeze(new Counter())
export default counterObj
