import { createContext, useState } from "react";

export const FunctionsContext = createContext();

export const FunctionProvider = ({ children }) => {
  const [notes, setNote] = useState([]);
  const [newNote, setNewNote] = useState({});

  const handleColorButton = (color) => {
    setNewNote({id: 0, color: color, text:"" }) 
  };

    
  const editNote = (color, value)=>{
    setNewNote({color:color, text:value})
  }

  const confirmEdit = (e)=>{
   const dataArr = new Set(notes)
   let result = [...dataArr];
   setNote(result)
  }

  const deleteNote = (idx) => {
    const result = notes.filter((e) => e.id !== idx);
    setNote(result);
  };
  
  
  const createNote = (n)=>{
    setNote([...notes,{ id: notes.length +1,color : n.color, text: n.text  }])
    setNewNote({})
  }

  const cancelNewNote = () =>{
  setNewNote({})
  }


  return (
    <FunctionsContext.Provider
      value={{
        handleColorButton,
        notes,
        deleteNote,
        setNote,
        newNote,
        editNote,
        createNote,
        cancelNewNote,
        confirmEdit
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};
