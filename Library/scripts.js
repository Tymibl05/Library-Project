const container = document.querySelector('#container');

const myLibrary = [];

function Book(title, author, position) {
    this.title = title
    this.author = author
    this.position = position
}

const book1 = new Book('Title1', 'Author1', 0)
myLibrary.push(book1)
const book2 = new Book('Title2', 'Author2', 1)
myLibrary.push(book2)
myLibrary.push(new Book('Title3','Author3', 2))

for (let i = 0 ; i <= 5 ; i++){
    let anotherTitle = `AnotherTitle${i + 1}`
    let anotherAuthor = `AnotherTitle${i + 1}`
    myLibrary.push(new Book(anotherTitle, anotherAuthor))
} //*
function clearContainer() {
    let element = container.lastElementChild
    while(element){
        container.removeChild(element)
        element = container.lastElementChild
    }
} //*
function showBooks() {
    clearContainer() //*
    for(book of myLibrary) {
        const bookContainer = document.createElement('div')
        const bookImg = document.createElement('div')
        bookImg.setAttribute('style', 'width: 150px; height: 250px; background-color: black; color: white;')
        bookImg.textContent = book.title

        const bookBtn = document.createElement('button')
        bookBtn.textContent = 'Remove'
        bookBtn.classList.add(`${book.title}`, 'remove-book')

        bookContainer.appendChild(bookImg)
        bookContainer.appendChild(bookBtn)
        container.appendChild(bookContainer)
    }
    clickBtn() //*
}
function clickBtn() { //*
    const buttons = document.querySelectorAll('.remove-book')
    for(button of buttons) {  
        button.addEventListener('click', (e) => {
            const search = myLibrary.find(search => search.title === e.target.classList[0])
            myLibrary.splice(myLibrary.indexOf(search), 1)
                        
            showBooks()
        })
    }
}
showBooks()
/*
    *** CHANGES 03/20/22
    > added a small loop to populate a few books and add to myLibrary[]
    > added a clearContainer() and set to start first in showBooks()
        - this deletes the DOM elements on the page every time a book was removed from myLibrary[] and recreates them with correct display for the new myLibrary[]
        - this was so once a book is removed and showBooks() runs, there wont be repeated DOM elements on page
    > button eventListener functionality was wrapped into function clickBtn() and added to end of showBooks()
        - this ensures that every time the DOM elements are created, they'll receive the click function
    > QOL: added extra book container div in showBooks()
        - just for cleaner display so bookImg and bookBtn stay together
    > QOL: removed extra code (e.g. console.log()s)
*/


