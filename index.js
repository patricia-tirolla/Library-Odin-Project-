// Library list
const myLibrary = [];

// Add book to the library
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

// The constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
       return console.log(this.title + this.author + this.pages)
    }
}

// Display the books in a table
function createTable() {

    // Select each book in the list and create a new column
    let display = document.getElementById("display");
    myLibrary.forEach((book, index) => {

        let tableRow = document.createElement("tr");
        tableRow.setAttribute("data-index", index);
        display.appendChild(tableRow);

        let tableColumn1 = document.createElement("td");
        let tableColumn2 = document.createElement("td");
        let tableColumn3 = document.createElement("td");
        
        tableRow.appendChild(tableColumn1);
        tableRow.appendChild(tableColumn2);
        tableRow.appendChild(tableColumn3);

        tableColumn1.textContent = book.title;
        tableColumn2.textContent = book.author;
        tableColumn3.textContent = book.pages;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button")
        removeButton.textContent = ("Delete");
        tableRow.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            tableRow.remove();
        })

        
    });            
}


// connect form buttons 
const openNewBookButton = document.querySelector("#new-book-button");
const cancelButton = document.getElementById("cancel-button");

openNewBookButton.addEventListener("click", () => {
    modal.show();
})

cancelButton.addEventListener("click", () => {
    submitForm.reset();
    modal.close();
})

// Actions when submitting the form
const modal = document.querySelector("#modal");
const submitForm = document.querySelector("#registration-form");

submitForm.addEventListener("submit", (e) => {

    // the preventDefaut() method prevents submiting the form on a server
    e.preventDefault();

    addBookToLibrary();
    createTable();
    modal.close();

    // the .reset() method clears the form when I click "submit"
    submitForm.reset()
})