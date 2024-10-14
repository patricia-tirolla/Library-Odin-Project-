// Library list
const myLibrary = [];

// The constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Create a new book using the inputs
function createBook() {

    let bookTitle = document.getElementById("book-title");

    let bookAuthor = document.getElementById("author");

    let bookPage = document.getElementById("pages");

    return new Book(bookTitle.value, bookAuthor.value, bookPage.value, false);
}

// Add book to the library
function addBookToLibrary() {
    myLibrary.push(createBook());
}

// Display the books in a table
function createTableRow() {
    let displayClean = document.getElementById("display-row");
    displayClean.textContent = "";

    myLibrary.forEach((book, index) => {
        
        const templateRow = document.getElementById("template");
        let clone = templateRow.content.cloneNode(true);

        clone.querySelector("tr").setAttribute("data-index", index);
        clone.querySelector(".book-title").textContent = book.title;
        clone.querySelector(".book-author").textContent = book.author;
        clone.querySelector(".book-pages").textContent = book.pages;
        clone.querySelector(".read-checkbox").checked = book.read;
        clone.querySelector(".delete-button").onclick = () => deleteRow(index);
        clone.querySelector(".read-checkbox").onchange = (e) => readStatus(book, e)

        const display = document.getElementById("display-row");
        display.appendChild(clone);
    });
}

function deleteRow(index) {
    myLibrary.splice(index, 1);
    createTableRow();
}

function readStatus(book, e) {
    book.read = e.target.checked;
    createTableRow();
}

myLibrary.push(new Book("title", "author", "000", false));
createTableRow();

// Modal show button
const addBookButton = document.getElementById("add-book-button");
const modal = document.getElementById("modal");
addBookButton.addEventListener("click", () => {
    modal.show()
})

// Cancel button
const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => {
    modal.close();
})

// Submit button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    createTableRow();
    e.target.parentElement.reset();
})