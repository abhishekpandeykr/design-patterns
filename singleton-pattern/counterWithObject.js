let counterWithObject = 0

const counter = Object.freeze({
    increment(){
        return counterWithObject++
    },
    decrement(){
        return counterWithObject--
    }
})

export default counter
