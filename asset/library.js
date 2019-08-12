'use strict';

//alert("test");

let myLibrary = [];
const form = document.querySelector('form');

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
    myLibrary.push(new Book(author, title, numPages, status))
}

form.addEventListener('submit', (e) => {
    addBookToLibrary();
    console.log(myLibrary);
    render(myLibrary);
    e.preventDefault();
})

function render(array) {
    let data = "";
    array.forEach(({author, title, numPages, status}, index) => {
        data += `<tr>
            <td>${index}</td>
            <td>${author}</td>
            <td>${title}</td>
            <td>${numPages}</td>
            <td>${status}</td>
            <td><button data-index="${index}">Delete</button></td>
        </tr>`
    })
    const bookTable = document.querySelector('table tbody');
    bookTable.innerHTML = data;
}

function newBookForm() {
    // const form = document.querySelector()
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

const newBookButton = document.querySelector('#new-book');
newBookButton.addEventListener('click', (e) => {
    newBookForm();
})