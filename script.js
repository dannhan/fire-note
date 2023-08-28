const noteTitleElement = document.getElementById('note-title');
const noteContentElement = document.getElementById('note-content');
const addNoteButton = document.querySelector('.add-btn');

window.addEventListener('load', () => {
  const savedTitle = localStorage.getItem('noteTitle');
  if (savedTitle) {
    noteTitleElement.value = savedTitle;
  }

  const savedContent = localStorage.getItem('noteContent');
  if (savedContent) {
    noteContentElement.textContent = savedContent;
  }
});

noteTitleElement.addEventListener('input', () => {
  const title = noteTitleElement.value;
  localStorage.setItem('noteTitle', title);
});

noteContentElement.addEventListener('input', () => {
  const content = noteContentElement.textContent;
  localStorage.setItem('noteContent', content);
});

// addNoteButton.addEventListener('click', () => {
//   const title = noteTitleElement.value;
//   localStorage.setItem('noteTitle', title);

//   const content = noteContentElement.textContent;
//   localStorage.setItem('noteContent', content);
// });
