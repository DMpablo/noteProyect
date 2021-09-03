import { useContext, useState } from "react";
import { FunctionsContext } from "../../context/functionContext";
import { NewNotes } from "../newNote/newNote";
import styles from "./listNotes.module.scss";
export const ListNotes = () => { 

  const {notes, newNote, deleteNote, editNote, createNote , cancelNewNote, confirmEdit} = useContext(FunctionsContext)

  const [edit, setEdit] = useState({ id:"", color:"", text: ""});
  const [change, setChange] = useState({id: 0, state: false});

  const handleText =  (id, color, target) => {
    setChange({id: id, state: true})
    setEdit({id:id, color: color, [target.name]: target.value});
   };

  const enviarDatos = (event)=>{
    event.preventDefault();
    confirmEdit(edit);
  };
  
  return (
    <div className={`${styles.container}`}>
      <h2>Notes</h2>
      <div className={`${styles.containerCards}`}>
       
       <NewNotes newNote={newNote} editNote={editNote} createNote={createNote} cancelNewNote={cancelNewNote}/> 

        { notes.length >= 0 ? (notes.map((e) => (
          <form key={e.id} className={`${styles.containerCard}`} onSubmit={enviarDatos}>
          <button
              className={`${styles[e.color]} ${styles.deleteNote}`}
              onClick={() => deleteNote(e.id)}
            >
              X
            </button>
            {
              change.state && change.id === e.id? (
              <button
              type="submit"
              className={`${styles[e.color]} ${styles.confirm}`}
              onClick={() => setChange({id: e.id, state: false})}
            >
              confirmar cambios
            </button>): ("")
            }
            <div>
              <textarea
                name="text"
                rows="auto"
                cols="auto"
                className={`${styles[e.color]} ${styles.card}`}
                onChange={({target}) => handleText(e.id, e.color, target)}
              >{e.text}</textarea>
            </div>
          </form>
        )))
        :
        <div>nota nueva</div>
        }
      </div>
    </div>
  );
};
