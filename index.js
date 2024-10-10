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

    // Create table heading strings
    let tableHTML =  `<table border="1">
                        <theader>
                            <tr>
                                <th>title</th>
                                <th>author</th>
                                <th>pages</th>
                            </tr>
                        </theader>
                        <tbody>`;

    // Select each book in the list and create a new column
    myLibrary.forEach((book) => {

        // Concatenate the strings to add the columns
        tableHTML += `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        </tr>`;
    });            

    // Concatenate the closing tags strings
    tableHTML += `</tbody></table>`;

    // Add the table strings to the display in HTML
    let display = document.getElementById("display");
    display.innerHTML = tableHTML
}

// connect form buttons 
const openNewBookButton = document.querySelector("#new-book-button");
const cancelButton = document.getElementById("cancel-button");
const modal = document.querySelector("#modal");
const submitForm = document.querySelector("#registration-form");

openNewBookButton.addEventListener("click", () => {
    modal.show();
})

cancelButton.addEventListener("click", () => {
    submitForm.reset();
    modal.close();
})

submitForm.addEventListener("submit", (e) => {

    // the preventDefaut() method prevents submiting the form on a server
    e.preventDefault();

    addBookToLibrary();
    createTable();
    modal.close();

    // the .reset() method clears the form when I click "submit"
    submitForm.reset()
})