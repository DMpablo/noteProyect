import { useContext } from "react";
import { FunctionsContext } from "../../context/functionContext";
import { NewNotes } from "../newNote/newNote";
import styles from "./listNotes.module.scss";
export const ListNotes = () => { 

  const {notes, newNote, deleteNote, editNote, createNote } = useContext(FunctionsContext)


  return (
    <div className={`${styles.container}`}>
      <h2>Notes</h2>
      <div className={`${styles.containerCards}`}>
       <NewNotes newNote={newNote} editNote={editNote} createNote={createNote}/> 
        {notes.map((e) => (
          <div key={e.id} className={`${styles.containerCard}`}>
            <button
              className={`${styles[e.color]} ${styles.deleteNote}`}
              onClick={() => deleteNote(e.id)}
            >
              X
            </button>
            <div>
              <textarea
                rows="auto"
                cols="auto"
                placeholder={e.text}
                className={`${styles[e.color]} ${styles.card}`}
                //onChange={({target}) => handleText(e.id, target.value, e.color)}
              ></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
