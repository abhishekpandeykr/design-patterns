## Singleton Pattern
Share a single global instance throughout our application

Singletons are classes which can be instantiated once and can be accessed 
throughout our application.
We can create a singleton Pattern with [Object](/singleton-pattern/counterWithObject.js) directly as well, as Javascript classes get converted into the Object.
***Singletons patterns*** are best for **managing the global state**.

### Disadavntages
Singletons are not encouraged in Javascript, it is considerd as the Anti Patter. Event
though we can save a whole lot of memory by creating one instance of a class.
