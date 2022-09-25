// Data Inputs

class book {
  bookConstructor(title = "", author = "", page = "0", read = false) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
  }
}

class library {
  bookConstructor() {
    this.allBooks = [];
  }

  addBook(newBook) {
    if (!this.isLibrary(newBook)) {
      this.allBooks.push(newBook);
    }
  }

  delBook(title) {
    this.allBooks = this.books.filter((book) => book.title !== title);
  }
  isLibrary(newBook) {
    return this.allBooks.some((book) => book.title === newBook.title);
  }
}

const completeLibrary = new library();
