import { useContext } from "react";
import { ListNotes } from "../../componentes/listNotes/listNotes";
import { NoteCreator } from "../../componentes/noteCreator/noteCreator";
import { FunctionsContext } from "../../context/functionContext";
import styles from "./home.module.scss";

export const Home = () => {
  const {handleColorButton, notes, deleteNote} = useContext(FunctionsContext)
 // const [notes, setNote] = useState([]);

  const handleText = (e) => {
    const value = e.target.value;
    console.log(value)
    //setNote([...notes,{ id: 0, color: "", text: value }] );
  };

   



  return (
    <main className={styles.home}>
      <aside className={styles.aside}>
        <p className={styles.logo}>Docket</p>
        <NoteCreator onColorButton={handleColorButton} />
      </aside>

      <section>
        <ListNotes
          notes={notes}
          deleteNote={deleteNote}
          handleText={handleText}
        />
      </section>
    </main>
  );
};
