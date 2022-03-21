console.log("Welcome to Harry Potter library");

/////////////////////////////////////////////////////////////////////////////////////////////

// setInterval(function back() {
//     const randomNumber = Math.floor(Math.random() * 2);
//     switch (randomNumber) {
//         case 0:
//             document.body.style.backgroundImage = "url(pics/0.jpg)";
//             break;
//         case 1:
//             document.body.style.backgroundImage = "url(pics/1.jpg)";
//             break;
//     }
// }, 5000);

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

/////////////////////////////////////////////////////////////////////////////////////////////

//Dispaly Constructor
function Display() {

}

/////////////////////////////////////////////////////////////////////////////////////////////

//Add methods to Display Prototype

//Adding ADD function to DISPLAY prototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tableBody.innerHTML += uiString;
}


//Adding CLEAR function to DISPLAY prototype
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}


//Adding SHOW function to DISPLAY prototype
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}

// Adding VALIDATE to DISPLAY prototype
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

//////////////////////////////////////////////////////////////////////////////////////

//Add Submit Event Listener to LibraryForm
let libraryForm = document.getElementById("libraryForm");

//whenever 'Add Book' button is pressed, 'LibraryFormSubmit' function is called
libraryForm.addEventListener("submit", libraryFormSubmit);

//LibraryFormSubmit function
function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger', 'Sorry you cannot add this book');
    }



    e.preventDefault();
}
