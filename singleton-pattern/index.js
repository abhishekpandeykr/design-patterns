const counterObj = require("./counter")
require("./index2")

counterObj.increment()
// output will be 5, because we have incremented the count value in index2 file and
// our state in global in pattern file
console.log("counter is", counterObj.count())