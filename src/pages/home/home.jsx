import { useContext } from "react";
import { ListNotes } from "../../componentes/listNotes/listNotes";
import { NoteCreator } from "../../componentes/noteCreator/noteCreator";
import { FunctionsContext } from "../../context/functionContext";
import styles from "./home.module.scss";

export const Home = () => {
  const {handleColorButton} = useContext(FunctionsContext)
 
  return (
    <main className={styles.home}>
      <aside className={styles.aside}>
        <p className={styles.logo}>Docket</p>
        <NoteCreator onColorButton={handleColorButton} />
      </aside>

      <section>
        <ListNotes />
      </section>
    </main>
  );
};