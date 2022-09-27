// Global varaibles

// Data inputs

let myLibrary = [
  {
    title: "test",
    author: "test",
    page: "123",
    read: true,
  },
  {
    title: "test2",
    author: "test",
    page: "123",
    read: false,
  },
  {
    title: "test3",
    author: "test",
    page: "143",
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

// Display each book as cards

function displayBooks() {
  const currentDisplay = document.querySelector(".currentDisplay");

  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    currentDisplay.appendChild(card);

    for (let key in myLibrary) {
      const text = document.createElement("p");
      text.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(text);
    }
  });
}

displayBooks();
