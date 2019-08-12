'use strict';

let myLibrary = [];
const form = document.querySelector('form');
const newBookButton = document.querySelector('#new-book');

function Book(author, title, numPages, status) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.status = status;
}

function addBookToLibrary() {
    const author = document.querySelector('[name="author"]').value;
    const title = document.querySelector('[name="title"]').value;
    const numPages = document.querySelector('[name="numPages"]').value;
    const status = document.querySelector('[name="status"]').checked;
    if (title.length > 0 && numPages.length > 0 && author.length > 0) {
        myLibrary.push(new Book(author, title, numPages, status));
    }

}

form.addEventListener('submit', (e) => {
    addBookToLibrary();
    render(myLibrary);
    e.preventDefault();
})

function render(array) {
    if (myLibrary.length == 0) return [];
    let thead = `
    <thead>
            <td>NO</td>
            <td>Author</td>
            <td>Title</td>
            <td>Number of Pages</td>
            <td>Status</td>
            <td>Change Status</td>
            <td>Delete</td>
        </thead>
    `
    let data = thead;
    array.forEach(({ author, title, numPages, status }, index) => {
        data += `<tr>
            <td>${index + 1}</td>
            <td>${author}</td>
            <td>${title}</td>
            <td>${numPages}</td>
            <td>${(status)? 'Read' : 'Unread'}</td>
            <td><button data-index="${index}" onclick="changeStatus(this)">Change Status</button></td>
            <td><button data-index="${index}" onclick="deleteBook(this)">Delete</button></td>
        </tr>`
    })
    const bookTable = document.querySelector('table');
    bookTable.innerHTML = data;
}

function newBookForm() {
    let bookForm = `
    <p> Author : <input type="text" name="author" /> </p>
    <p> Title : <input type="text" name="title" /> </p>
    <p> Number of Pages : <input type="text" name="numPages" /> </p>
    <p>
        Read ? :<input type="checkbox" name="status">            
    </p>
    <p><button type="submit">Submit</button></p>
    `
    form.innerHTML = bookForm;
}

newBookButton.addEventListener('click', (e) => {
    newBookForm();
})

function deleteBook(book) {
    myLibrary.splice(book.dataset.index, 1);
    render(myLibrary);
}

function changeStatus(book) {
    myLibrary[book.dataset.index].status = !myLibrary[book.dataset.index].status
    render(myLibrary);
}