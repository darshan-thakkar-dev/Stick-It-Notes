if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}

let count = Number(window.localStorage.getItem("count"));
if (!count) {
  window.localStorage.setItem("count", 0);
}
function createNote(noteTitle, noteBody) {
  let liTag = document.createElement("li");
  let aTag = document.createElement("a");
  let h2Tag = document.createElement("h2");
  let xButtonTag = document.createElement("Button");
  let pTag = document.createElement("p");

  xButtonTag.classList.add("delete-note");
  let xText = document.createTextNode("X");
  let h2TN = document.createTextNode(noteTitle);
  let pTN = document.createTextNode(noteBody);

  h2Tag.appendChild(h2TN);
  pTag.appendChild(pTN);
  xButtonTag.appendChild(xText);

  aTag.appendChild(h2Tag);
  aTag.appendChild(xButtonTag);
  aTag.appendChild(pTag);
  aTag.setAttribute("href", "#");

  liTag.appendChild(aTag);

  document.getElementById("notes").appendChild(liTag);
}

function createNoteListener(e) {
  e.preventDefault();
  let inputTitle = document.getElementById("input-title").value;
  let inputNote = document.getElementById("input-note").value;
  let uniqueCode = "";
  let noOfTimes = 0;
  // alert("Title :- " + inputTitle + "Note :- " + inputNote);

  document.getElementById("input-title").value = "";
  document.getElementById("input-note").value = "";

  count += 1;

  for (let i = 0; i < count + 1; i++) {
    if (inputTitle === window.localStorage.key(i)) {
      noOfTimes++;
      inputTitle = inputTitle + "(" + (noOfTimes + ")");
    }
  }
  createNote(inputTitle, inputNote);
  window.localStorage.setItem("count", count);
  window.localStorage.setItem(inputTitle, inputNote);
}

for (let i = 0; i < count + 1; i++) {
  let noteTitle = window.localStorage.key(i);
  let noteBody = window.localStorage.getItem(noteTitle);

  if (noteTitle !== "count" && noteTitle) {
    createNote(noteTitle, noteBody);
  }
}

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteListener);

function removeItem(e) {
  if (e.target.classList.contains("delete-note")) {
    if (confirm("Are you sure you want to delete ?")) {
      let li = e.target.parentElement.parentElement;
      let ul = document.getElementById("notes");
      ul.removeChild(li);
    }
  }
  count -= 1;
  window.localStorage.setItem("count", count);
  window.localStorage.removeItem(e.target.previousElementSibling.innerText);

  if (count < 1) {
    document.getElementById("no-notes-found").className = "";
  }
  console.log(document.getElementById("no-notes-found").className);
}

document.getElementById("notes").addEventListener("click", removeItem);
