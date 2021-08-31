import { useContext } from "react";
import { FunctionsContext } from "../../context/functionContext";
import { NewNotes } from "../newNote/newNote";
import styles from "./listNotes.module.scss";
export const ListNotes = () => { 

  const {notes, newNote, deleteNote, editNote, createNote , cancelNewNote,handleText, confirmEdit} = useContext(FunctionsContext)

  return (
    <div className={`${styles.container}`}>
      <h2>Notes</h2>
      <div className={`${styles.containerCards}`}>
       
       <NewNotes newNote={newNote} editNote={editNote} createNote={createNote} cancelNewNote={cancelNewNote}/> 

        { notes.length >= 0 ? (notes.map((e) => (
          <div key={e.id} className={`${styles.containerCard}`}>
          <button
              className={`${styles[e.color]} ${styles.deleteNote}`}
              onClick={() => deleteNote(e.id)}
            >
              X
            </button>
            
            <button
              className={`${styles[e.color]} ${styles.confirm}`}
              onClick={() => confirmEdit(e.id, e.color)}
            >
              confirmar cambios
            </button>
            <div>
              <textarea
                rows="auto"
                cols="auto"
                className={`${styles[e.color]} ${styles.card}`}
                onChange={({target}) => handleText(e.id, e.color, target.value,)}
              >{e.text}</textarea>
            </div>
          </div>
        )))
        :
        <div>nota nueva</div>
        }
      </div>
    </div>
  );
};
