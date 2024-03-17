import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function AddNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(noteId) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== noteId
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote}/>
      {notes.map((noteItem, index) => {
        return <Note 
        key={index}
        noteId={index}
        title={noteItem.title} content={noteItem.content}
        onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
