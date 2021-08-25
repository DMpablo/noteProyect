import { createContext, useState } from "react";

export const FunctionsContext = createContext();

export const FunctionProvider = ({ children }) => {
  const [notes, setNote] = useState([]);
  const [newNote, setNewNote] = useState({});

  const handleColorButton = (color) => {
    setNewNote({color: color}) 
  };

  const handleText =  (id, value, color) => {
   const changeNote =  notes.splice(id, 1, {id: id, color: color, text: value})
  
   setNote(...notes, changeNote);
  };
  
  const editNote = (color, value)=>{
    setNewNote({color:color, text:value})
  }

  const deleteNote = (idx) => {
    let newNotes = notes;
    newNotes.splice(idx, 1);
    setNote(newNotes);
  };

  
const createNote = (newNote)=>{
  setNote([...notes, newNote])
  setNewNote({})
}

  return (
    <FunctionsContext.Provider
      value={{
        handleColorButton,
        handleText,
        notes,
        deleteNote,
        setNote,
        newNote,
        editNote,
        createNote
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};
