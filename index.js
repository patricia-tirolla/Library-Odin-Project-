const myLibrary = [];

// Add book to library
function addBookToLibrary() {
    let newBookTitle = prompt("Add the book title");
    let newBookAuthor = prompt("Add the author");
    let newBookPage = prompt("Add the number of pages");
    const book = new Book(newBookTitle, newBookAuthor, newBookPage);


    myLibrary.push(book);
    return myLibrary;
}
addBookToLibrary();
console.log(myLibrary);

// Display each book on the page
function displayEachBook() {
    myLibrary.forEach((element) => console.log(element));
}
displayEachBook();

// The constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
       return console.log(this.title + this.author + this.pages)
    }
}

