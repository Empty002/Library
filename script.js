const showDialogButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");
const addBookDialog = document.querySelector("#add-book-dialog")
const mainSection = document.querySelector("main");
const titleField = document.querySelector(".title-field")
const authorField = document.querySelector(".author-field")



showDialogButton.addEventListener("click", () => {
    addBookDialog.showModal();
}) 

closeButton.addEventListener("click", () =>{
    addBookDialog.close();
})

class book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    library = [];

    addBook(title, author){
        const book = new Book(titleField.value, authorField.value);
        this.library.push(book);
        this.render();
    }

    render(){
        mainSection.innerHTML = "";

        this.library.forEach(book => {
            const card = document.createElement("div");
            card.textContent = book.title;
            card.textContent = book.author;
            mainSection.appendChild(card);
        })
    }
}