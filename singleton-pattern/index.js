import counterObj from './counter.js'
import "./index2.js"


const setValue = () => {
    const value = counterObj.count()
    const elementToWrite = document.getElementById("count")
    elementToWrite.innerText = value
}

const firstButton = document.getElementById("first-button")
firstButton.addEventListener('click', () => {
    counterObj.increment()
    setValue()
})