# library
Book library with basic Javascript

# LIBRARY

Using the concepts of javascript 'OBJECTS' and 'OBJECT CONSTRUCTOR' to construct a 1-page basic Book library. The following functionalities are implemented :

- **adding books**
- **changing Book status ('read' or 'unread')**
- **deleting books from library**

## DESCRIPTION

The main functionality is the **/asset/library.js** file. The main functions are :

```
//variable to contain Book objects
let myLibrary = [];


// Constructor function for books
  function Book(author, title, numPages, status) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.status = status;
}


  // This is the function that collects Book information from input forms and constructs the book objects.
  These objects are added to "myLibrary" array and then rendered
  function addBookToLibrary() {
    const author = document.querySelector('[name="author"]').value;
    const title = document.querySelector('[name="title"]').value;
    const numPages = document.querySelector('[name="numPages"]').value;
    const status = document.querySelector('[name="status"]').checked;
    myLibrary.push(new Book(author, title, numPages, status))
}

```

Visit **/asset/library.js** file for more functionality

## Live demo

https://raw.githack.com/shloch/library/development/index.html

### Screenshot

![alt text](https://github.com/shloch/library/blob/master/book.gif)

## Future features
- Redo a good responsive book design into the project
- add pop-up window for the form to add books
- add more animation

## Contributors

### 👤 **SHEY Louis CHIA**

- Github: [shloch](https://github.com/shloch)
- Twitter: [@shloch](https://twitter.com/shloch)
- Linkedin: [/in/shey-louis-chia](https://www.linkedin.com/in/shey-louis-chia)
- Email: shloch2007@yahoo.fr


### 👤 **Terver Aosu**
- Terver Aosu _https://github.com/truetechcode_

## Acknowledgements
- https://www.theodinproject.com/
- https://javascript.info/
- https://raw.githack.com
