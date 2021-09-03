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
   console.log(result);
   setNote(result)
  }

  const deleteNote = (idx) => {
    const result = notes.filter((e) => e.id !== idx);
    //result.splice(idx, 1);
    setNote(result);
  };
  
  
  const createNote = (n)=>{
    setNote([...notes,{ id: notes.length +1,color : n.color, text: n.text  }])
    setNewNote({})
    console.log(notes);
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
