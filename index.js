const myLibrary = [];

// // Add book to library
// function addBookToLibrary() {
//     let newBookTitle = prompt("Add the book title");
//     let newBookAuthor = prompt("Add the author");
//     let newBookPage = prompt("Add the number of pages");
//     const book = new Book(newBookTitle, newBookAuthor, newBookPage);

//     myLibrary.push(book);
//     return myLibrary;
// }

function addBookToLibrary() {
    let bookTitle = document.getElementById("book-title");
    let bookTitleValue = bookTitle.value;

    let bookAuthor = document.getElementById("author");
    let bookAuthorValue = bookAuthor.value;

    let bookPage = document.getElementById("pages");
    let bookPageValue = bookPage.value;

    const book = new Book(bookTitleValue, bookAuthorValue, bookPageValue);

    myLibrary.push(book);
}


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


// connect form buttons
const openAddNewBookButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const submitForm = document.querySelector("#library-book-registration")

openAddNewBookButton.addEventListener("click", () => {
    modal.show();
})

// closeButton.addEventListener("click", () => {
//     modal.close()
// })

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    modal.close();

})
console.log(myLibrary);
