import React, { useState, useEffect } from "react";

export const NoteForm = (props) => {
  const { selected, onSubmit, onCancel } = props;

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function resetNoteState() {
    setId("");
    setTitle("");
    setText("");
  }

  function setNoteState(note) {
    setId(note?.id);
    setTitle(note?.title);
    setText(note?.text);
  }

  useEffect(() => {
    console.log('test', selected);
    if (selected)  return setNoteState(selected);
      return resetNoteState();
  }, [selected]);

  function handleChange(e) {
    e.preventDefault();
    onSubmit({ id, title, text });
    if (!selected) return resetNoteState;
  }

  return (
    <form onSubmit={handleChange.bind(this)}>
      <div className="form-group">
        <label>Title:</label>
        <input
          className="form-control"
          data-testid="input-title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Note:</label>
        <textarea
          className="form-control"
          data-testid="input-text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="button"
          data-testid="cancel-note"
          className="btn btn-default pull-right"
          value="Cancel"
          onClick={() => onCancel}
        />
        <input
          type="submit"
          data-testid="save-note"
          className="btn btn-default pull-right"
          value="Save"
        />
      </div>
    </form>
  );
};

export default NoteForm;
