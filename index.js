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

    const book = new Book(bookTitleValue, bookAuthorValue, bookPageValue, false);

    myLibrary.push(book);
}

// The constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
       return console.log(this.title + this.author + this.pages)
    }
}

// Display the books in a table
function createTable() {
    let display = document.getElementById("display");
    display.textContent = "";

    // Select each book in the list and create a new column
    myLibrary.forEach((book, index) => {

        // table row
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("data-index", index);
        display.appendChild(tableRow);

        // title column
        let titleColumn = document.createElement("td");
        tableRow.appendChild(titleColumn);
        titleColumn.textContent = book.title;

        // author column
        let authorColumn = document.createElement("td");
        tableRow.appendChild(authorColumn);
        authorColumn.textContent = book.author;

        // pages column
        let pagesColumn = document.createElement("td");
        tableRow.appendChild(pagesColumn);
        pagesColumn.textContent = book.pages;

        // read column
        let readColumn = document.createElement("td");
        let checkboxInput = document.createElement("input");
        let checkboxLabel = document.createElement("label");
        tableRow.appendChild(readColumn);
        readColumn.appendChild(checkboxInput);
        readColumn.appendChild(checkboxLabel);

        // set checkbox attribute
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.id = "read-checkbox-" + index;
        checkboxLabel.textContent = "Read";
        checkboxLabel.htmlFor = "read-checkbox-" + index;

        // Check if the book is read or not
        if (book.read === true) {
            checkboxInput.checked = true;
        } else {
            checkboxInput.checked = false;
        }

        // Change the book read status when click the checkbox
        checkboxInput.addEventListener("click", () => {
            if (checkboxInput.checked === true) {
                book.read = true;
            } else {
                book.read = false;
            }
        })

        // delete column
        let deleteColumn = document.createElement("td");
        tableRow.appendChild(deleteColumn);

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button")
        removeButton.textContent = ("Delete");
        deleteColumn.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            tableRow.remove();
        })
    })       
}

// connect form buttons 
const openNewBookButton = document.querySelector("#new-book-button");
const cancelButton = document.querySelector("#cancel-button");

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