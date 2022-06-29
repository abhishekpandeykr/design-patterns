import counterObj from './counter.js'


const setValue = () => {
    const value = counterObj.count()
    const elementToWrite = document.getElementById("count")
    elementToWrite.innerText = value
}

const secondBtn = document.getElementById("second-button")
secondBtn.addEventListener("click", () => {
    counterObj.decrement()
    setValue()
})
