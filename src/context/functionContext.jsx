import { createContext, useState } from "react";

export const FunctionsContext = createContext();

export const FunctionProvider = ({ children }) => {
  const [notes, setNote] = useState([]);
  
  const handleColorButton = (color) => {
    setNote([...notes, color]);
  };

  const deleteNote = (idx) => {
    const newNotes = notes;
    newNotes.splice(idx, 1);
    setNote([newNotes]);
  };

  return (
    <FunctionsContext.Provider
      value={{
        handleColorButton,
        notes,
        setNote,
        deleteNote,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};
