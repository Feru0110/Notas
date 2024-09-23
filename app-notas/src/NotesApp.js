import React, { useState } from 'react';
import './NotesApp.css';

const NotesApp = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAddNote = () => {
        if (inputValue.trim() === '') return;

        if (editIndex !== null) {
            const updatedNotes = notes.map((note, index) =>
                index === editIndex ? inputValue : note
            );
            setNotes(updatedNotes);
            setEditIndex(null);
        } else {
            setNotes([...notes, inputValue]);
        }
        setInputValue('');
    };

    const handleEditNote = (index) => {
        setInputValue(notes[index]);
        setEditIndex(index);
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className="notes-container">
            <h1>Aplicación de Notas</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe una nota..."
            />
            <button onClick={handleAddNote}>
                {editIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <span>{note}</span>
                        <button onClick={() => handleEditNote(index)}>Editar</button>
                        <button onClick={() => handleDeleteNote(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesApp;
