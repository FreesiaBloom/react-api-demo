import React, { useState, useEffect } from "react";

import { NotesList } from "./NotesList";
import { NoteForm } from "./NoteForm";
import { NotesService } from "../../services/notes";

export const Note = (props) => {
    const service = new NotesService();
//   const { service } = props;

  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState(null);

  function getNotes() {
    service.getNotes()
      .then((data) => {
        setNotes(data);
      })
  }

  // (!) Get notes from service
  useEffect(() => {
    getNotes();
  }, []);

  // Select new empty note
  function newNote(note) {
  }

  // Set note as selected
  function onSelect(note) {
    if (!selected || (selected && selected?.id !== note.id)) return setSelected(note);
    return setSelected(null);
  }

  // Save note to service
  function onSubmit(note) {
    if (selected && selected.id === note.id) {
      service.update(note);
      return getNotes(); 
    }
    setSelected(null);
    return service.saveNote(note).then((newNote) => {
      setNotes([...notes, newNote]);
    })
  }

  // Set note as selected
  function onCancel() {
    setSelected(null);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React notes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <NotesList notes={notes} selected={selected} onSelect={onSelect} onCancel={onCancel}/>
        </div>
        <div className="col-md-8">
          <NoteForm onSubmit={onSubmit} selected={selected} />
          <div>
            <button id="new-note">
              Save New Note to DataBase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
