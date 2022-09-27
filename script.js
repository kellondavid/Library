// Global Varaibles
const currentDisplay = document.querySelector(".currentDisplay");
currentDisplay.innerHTML = "";

// Data Inputs

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

function book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  let a = document.getElementById("formTitle").value;
  let b = document.getElementById("formAuthor").value;
  let c = document.getElementById("formPage").value;
  let d = document.getElementById("formRead").checked;

  if (a !== "" && b !== "" && c !== "") {
    myLibrary.push(new book(a, b, c, d));
  }
}
