const comicsFactory = ({name, author, publisher, publishYear}) => ({
    name,
    author,
    publishYear,
    publisher,
    info(){
        return `${name} comic created by ${author} in ${publishYear} and it was published by ${publisher}`
    }
})

const billo = comicsFactory({
    name:"Billo", 
    author:"Pran Kumar Sharma", 
    publisher:"Diamond Comics", 
    publishYear:1973
})

console.log(billo.info())

// create object from Array'
const createFactoryFromArray = ([key, value], [key2, value2]=[]) => ({
    [key]:value,
    ...(key2 && {[key2]:value2})
})
console.log(createFactoryFromArray(['name','Abhishek'], ))

const createComicsFromArray = arrayOfInfo => {
    const res = {}
    arrayOfInfo.forEach(([key,value], idx) => {
        res[key] = value
    })
    return res
}
const pairs = [
    ["name","Billo"],
    ["author","Pran Kumar Sharma"],
    ["publisher","Diamond Comics"],
    ["publishYear","1973"]
]
console.log(createComicsFromArray(pairs))
