class Human {
    constructor(name){
        this.name = name
    }
}

const humanRoleFunctionality = {
    parent:() => "Take care of your child",
    greet:() => console.log("Namaste") 
}

const humanFunctionality = {
    eat:() => console.log("eating"),
    work:() => console.log("working hard for life"),
    sleep:() => "sleeping",
    repeat:() => console.log("repeat")
}

// now we can add humanRoleFunctionality mixin to the humanFUnctionality Prototype
Object.assign(humanFunctionality, humanRoleFunctionality)
// Now we can add humanFunctionality mixin to the Human Prototype
Object.assign(Human.prototype, humanFunctionality)

const ben = new Human("Ben Affleck")
console.log(ben.name)
console.log(ben.sleep())
console.log(ben.parent())
console.log(Human.prototype)