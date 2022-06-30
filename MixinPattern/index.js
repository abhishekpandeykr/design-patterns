class Human {
    constructor(name){
        this.name = name
    }
}

const humanFunctionality = {
    eat:() => console.log("eating"),
    work:() => console.log("working hard for life"),
    sleep:() => console.log("sleeping"),
    repeat:() => console.log("repeat")
}

// Now we can add humanFunctionality mixin to the Human Prototype

Object.assign(Human.prototype, humanFunctionality)

const ben = new Human("Ben Affleck")
console.log(ben.name)
console.log(ben.sleep())