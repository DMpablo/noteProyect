import { useState } from "react";
import styles from "./listNotes.module.scss";

export const ListNotes = ({ notes, deleteNote }) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    const value = e.target.value;
    setText(value);
    console.log(text);
  };
  return (
    <div className={`${styles.container}`}>
      <h2>Notes</h2>

      <div className={`${styles.containerCards}`}>
        {notes.map((note, idx) => (
          <div className={`${styles.containerCard}`}>
            <button
              className={`${styles[note]} ${styles.deleteNote}`}
              onClick={() => deleteNote(idx)}
            >
              X
            </button>
            <div>
              <textarea
                rows="auto"
                cols="auto"
                placeholder="escribe una nota"
                className={`${styles[note]} ${styles.card}`}
                onChange={handleText}
              ></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
