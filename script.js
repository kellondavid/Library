// Global varaibles

// Data inputs

let myLibrary = [
  {
    title: "test",
    author: "test",
    page: "123",
    read: true,
  },
];

// Object constructor
function book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

// Add new books to library
function addBookToLibrary() {
  let a = document.getElementById("formTitle").value;
  let b = document.getElementById("formAuthor").value;
  let c = document.getElementById("formPage").value;
  let d = document.getElementById("formRead").checked;

  if (a !== "" && b !== "" && c !== "") {
    myLibrary.push(new book(a, b, c, d));
  }
}

const submit = document.getElementById("submitInput");
submit.addEventListener("submit", () => {
  event.preventDefault();
  addBookToLibrary();
  submit.reset();
  displayBooks();
});

// Display each book as cards

function displayBooks() {
  const currentDisplay = document.querySelector(".currentDisplay");
  currentDisplay.textContent = "";

  myLibrary.forEach((myLibrary) => {
    let card = document.createElement("div");
    card.classList.add("card");
    currentDisplay.appendChild(card);

    for (let key in myLibrary) {
      const text = document.createElement("p");
      text.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(text);
    }
    const readBtn = document.createElement("button");
    card.appendChild(readBtn);

    if (myLibrary.read === true) {
      readBtn.textContent = "Read";
    }
    if (myLibrary.read === false) {
      readBtn.textContent = "Not Read";
    }

    readBtn.addEventListener("click", () => {
      if (readBtn.textContent === "Read") {
        readBtn.textContent = "Not Read";
        myLibrary.read = false;
      } else if (readBtn.textContent === "Not Read") {
        readBtn.textContent = "Read";
        myLibrary.read = true;
      }
    });
    const remBtn = document.createElement("button");
    card.appendChild(remBtn);
    remBtn.textContent = "Remove";
    remBtn.addEventListener("click", remBook);
  });
}

// Remove book function
function remBook() {
  this.card.textContent = "";
}

displayBooks();
