import styles from "./newNotes.module.scss";

export const NewNotes = ({newNote, editNote, createNote,cancelNewNote}) => {

  return (
     
         newNote.color !== undefined ? ( 
         <div className={`${styles.containerCard}`}>
            <button
              className={`${styles[newNote.color]} ${styles.deleteNote}`}
              onClick={() => cancelNewNote()}
            >
              Cancel
            </button>
            <div> 
              <textarea
                rows="auto"
                cols="auto"
                placeholder="escribe una nota"
                className={`${styles[newNote.color]} ${styles.card}`}
                onChange={({target}) => editNote( newNote.color, target.value )}
              ></textarea>
              <button
              className={`${styles[newNote.color]} ${styles.createNote}`}
              onClick={() => createNote(newNote)}
              >
              +
            </button>
            </div>
          </div>)
          :
          ""
  );
};
