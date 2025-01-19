class Library{
    constructor(name, location, categories, books){
        this.name = name
        this.location = location
        this.categories = categories
        this.books = books
    }
    get numberOfBooks(){
        return this.books.length
    }
    getAvailableBooks() {
        return this.books.map(book => {return book.title})
    }
    addBook(title, author, isAvailable, ratings){
        let book = {title: title, author: author, isAvailable: isAvailable, ratings: ratings}
        this.books.push(book)
    }
    calculateAverageRating(title){
        let book = this.books.find(book => book.title == title)
        if(book){
            let len = book.ratings.length
            return book.ratings.reduce((acc, curr) => acc + (curr/len), 0)
        }
        else{
            return null
        }
    }
}

let library = new Library("The Library", "Online", ["Fiction", "Biographies", "Textbooks"], [])

library.addBook("1984", "George Orwell", true, [1,4,5,2,2])
library.addBook("A promised land", "Barack Obama", true, [3, 3, 4, 5, 2])
library.addBook("The Hitchhikers guide to the galaxy", "Douglas Adams", false, [4,4,5,3,2])

console.log(`Available books: ${library.getAvailableBooks()}`)

console.log(`\n\nAverage rating of "A promised land: ${library.calculateAverageRating("A promised land")}`)
for(let cat of ["Fantasy", "Politics"]){
    library.categories.push(cat)
}
console.log(`\n\nAll Categories ${library.categories}`)

for(attr in library){
    if(typeof(library.attr) != Array){
        console.log(`${attr}:`, library[attr] )
    }
}

fauxLib = {...library}
console.log(library.calculateAverageRating)

console.log(fauxLib == library)
console.log(fauxLib === library)//both return false because library is an instance of a Library object while fauxLib
//is like an object literal(that is, the spread operator copied the attributes but not the method so fauxLib dosen't
//have the same contents as library)