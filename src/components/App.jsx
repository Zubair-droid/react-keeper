import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  
const notesMapper = (noteItem, index) => {
  return (
    <Note
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
    />
  );
}
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(notesMapper)}
      <Footer />
    </div>
  );
}

export default App;
