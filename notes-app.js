const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear-btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let note = document.createElement("div");
    let inputBox = document.createElement("div");
    let img = document.createElement("img");
    
    note.className = "note";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/Notes App/Images/delete-notes-app.png";
    
    note.appendChild(inputBox);
    note.appendChild(img);
    notesContainer.appendChild(note);

    // Move cursor to the start of the input box
    moveCursorToStart(inputBox);
});

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    notesContainer.innerHTML = '';
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.classList.contains("input-box")) {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

function moveCursorToStart(element) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(element, 0);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    element.focus();
}