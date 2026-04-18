const showDialogButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");
const addBookDialog = document.querySelector("#add-book-dialog");
const mainSection = document.querySelector("main");

const titleField = document.querySelector(".title-field");
const authorField = document.querySelector(".author-field");
const pagesField = document.querySelector(".pages-field");
const readCheck = document.querySelector(".read-checkbox");
const submitButton = document.querySelector("#submit-button");

class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

const library = [];

function addBook(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
  renderUI();
}

function removeBook(id) {
  const index = library.findIndex((book) => book.id === id);
  if (index > -1) {
    library.splice(index, 1);
    renderUI();
  }
}

function renderUI() {
  mainSection.innerHTML = "";

  library.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h2>${book.title}</h2>
      <p>By: ${book.author}</p>
      <p>${book.pages} Pages</p>
      <p>Status: ${book.read ? "Read" : "Not Read Yet"}</p>
      <div class="card-buttons">
        <button class="toggle-read-btn">${book.read ? "Mark Unread" : "Mark Read"}</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    card.querySelector(".remove-btn").addEventListener("click", () => {
      removeBook(book.id);
    });

    card.querySelector(".toggle-read-btn").addEventListener("click", () => {
      book.toggleRead();
      renderUI();
    });

    mainSection.appendChild(card);
  });
}

showDialogButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

closeButton.addEventListener("click", () => {
  addBookDialog.close();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (titleField.value && authorField.value) {
    addBook(
      titleField.value,
      authorField.value,
      pagesField.value,
      readCheck.checked,
    );

    addBookDialog.close();
    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    readCheck.checked = false;
  }
});
