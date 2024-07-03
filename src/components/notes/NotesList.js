import React from 'react'

export const NotesList = (props) => {
    const { notes = [], selected, onSelect } = props
    return <div className="list-group"> 
        {notes.map(note => 
            <button data-testid="note-item" className={selected?.id === note.id ? 'list-group-item active' : 'list-group-item'} id={note.id} key={note.id} onClick={() => onSelect(note)}>
                {note.title}
            </button>
        )}
    </div>
}

export default NotesList;