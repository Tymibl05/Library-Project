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
console.log(myLibrary)
console.log(myLibrary[0])
console.log(myLibrary[1])
console.log(myLibrary[0].title)
console.log(myLibrary[1].title)

myLibrary.push(new Book('Title3','Author3', 2))
console.log(myLibrary)
console.log(myLibrary[2])

let book3 = myLibrary.find(book => book.position === 2) // Array.find() returns the array item based on the defined property (in this case the position)
console.log(book3)
// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

myLibrary.splice(myLibrary.indexOf(book3), 1)
console.log(myLibrary)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

function showBooks() {
    for(book of myLibrary) {
        const bookImg = document.createElement('div')
        bookImg.setAttribute('style', 'width: 150px; height: 300px; background-color: black; color: white;')
        bookImg.textContent = book.title

        const bookBtn = document.createElement('button')
        bookBtn.textContent = 'Remove'
        bookBtn.classList.add(`${book.title}`, 'remove-book')

        container.appendChild(bookImg)
        container.appendChild(bookBtn)
    }
}

showBooks()

const buttons = document.querySelectorAll('.remove-book')
for(button of buttons) {  
    button.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(e.target.classList[0]) // returns the class at that position in class array
        
        const search = myLibrary.find(search => search.title === e.target.classList[0])
        console.log(search)
        myLibrary.splice(myLibrary.indexOf(search), 1)

        // myLibrary.splice(myLibrary.indexOf(e.target.classList[0]), 1) // this does NOT function properly as e.target is a DOM element and search is that actual object 'title' property

        console.log(myLibrary)
    })
}
/* ***** SUCCESS *****
    > showBooks()
        -- this takes an array (myLibrary) and displays the items onto the page by creating html elements for each item
        -- button is also created for each item and given a class specific name that correlates to each respective item
            -- in this case, the book.title of the object is given as the class name to the button (e.g. one button class='Title1' while the other button class='Title2' )
            -- this allows for each button to be called independently for future functions
    > const buttons = document.querySelectorAll('.remove-book')
        -- gives me a node list of my 'remove-book' buttons to work with
    > for(button of buttons) { button.addEventListener('click' , (e) => {})}
        -- onClick event listener added to each button 
        -- e.target.classList[0] gives me the first class name of the clicked button (in this case it was the book title that was set in showBooks())
        -- Array.find() was used to set a generic variable to the book whose title matches the title name class stored in the button that was clicked
            -- const search = myLibrary.find(search => search.title === e.target.classList[0])
        --  myLibrary.splice(myLibrary.indexOf(search), 1) removes the array item from library

*/
