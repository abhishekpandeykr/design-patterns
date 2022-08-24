const isbnNumbers = new Set()
const bookList = []

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

const createBook = (title, author, isbn) => {
    const book = isbnNumbers.has(isbn);

    if(book) {
        return book
    }

    const newBook = new Book(title, author, isbn)
    isbnNumbers.add(isbn)
    return newBook
}

const addBook = (title, author, isbn, availability, sales) => {
    const book = {
        ...createBook(title, author, isbn),
        sales, 
        availability,
        isbn
    }

    bookList.push(book)
    return book
}

addBook("Chandrakanta", "Devaki Nandan Khatri", 121, true, 1000)
addBook("Chandrakanta", "Devaki Nandan Khatri", 121, false, 10000)
addBook("Godan", "Munsi Premchandra", 122, false, 100)
addBook("2 balon ki jodi", "Munsi Premchandra", 123, true, 100)

console.log("Total amount of copies", bookList.length)
console.log("Total amount of books", isbnNumbers.size)



