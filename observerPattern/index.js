class Observable {
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
    }

    unsubscribe(fn){
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    notify(data){
        this.observers.forEach(observer => observer(data));
    }
}

const observable = new Observable();

const logger = (msg) => {
    console.log(`${new Date().toISOString()} - Logging, and your message is: ${msg}`);
}

observable.subscribe(logger);


const btn = document.getElementById("observerBtn");
const input = document.getElementById("observerInput");
btn.addEventListener("click", () => {
    observable.notify("Hello World");
})
input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        observable.notify(input.value);
    }
})