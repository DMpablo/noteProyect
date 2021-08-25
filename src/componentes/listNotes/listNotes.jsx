//import { useState } from "react";
import styles from "./listNotes.module.scss";

export const ListNotes = ({ notes, deleteNote, handleText}) => {

  return (
    <div className={`${styles.container}`}>
      <h2>Notes</h2>

      <div className={`${styles.containerCards}`}>
        {notes.map((e, idx) => (
          <div className={`${styles.containerCard}`}>
            <button
              className={`${styles[e]} ${styles.deleteNote}`}
              onClick={() => deleteNote(idx)}
            >
              X
            </button>
            <div>
              <textarea
                rows="auto"
                cols="auto"
                placeholder="escribe una nota"
                className={`${styles[e]} ${styles.card}`}
                onChange={handleText}
              ></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
