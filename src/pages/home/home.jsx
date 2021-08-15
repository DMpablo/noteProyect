import { useState } from "react";
import { ListNotes } from "../../componentes/listNotes/listNotes";
import { NoteCreator } from "../../componentes/noteCreator/noteCreator";
import styles from "./home.module.scss";

export const Home = () => {
  const [notes, setNote] = useState([]);
  

  const handleColorButton = (color) => {
    const newNote = color;
    setNote([...notes, newNote]);
  };

  const deleteNote = (idx) => {
    const newNotes = notes
    newNotes.splice(idx, 1 )
    setNote([...newNotes]);
  } 



  return (
    <main className={styles.home}>
      <aside className={styles.aside}>
        <p className={styles.logo}>Docket</p>
        <NoteCreator onColorButton={handleColorButton} />
      </aside>

      <section>
        <ListNotes notes={notes} deleteNote={deleteNote}/>
      </section>
    </main>
  );
};
