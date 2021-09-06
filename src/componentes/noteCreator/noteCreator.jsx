import { useState } from "react";
import { ColorButton } from "../colorButton/colorButton";
import styles from "./noteCreator.module.scss";

export const NoteCreator = ({ onColorButton }) => {
  const COLORS = ["cyan", "green", "orange", "yelow", "purple"];
  const [showColors, setShowColors] = useState(false);

  return (
    <div className={styles.noteCreator}>
      <button
        className={styles.plusButton}
        onClick={() => setShowColors(!showColors)}
      >
        +
      </button>
      <div className={styles.containerColors}>
        {showColors &&
          COLORS.map((color, idx) => (
            <ColorButton
              key={idx}
              color={color}
              click={(color) => {
                onColorButton(color);
                setShowColors(false);
              }}/>
          ))}
      </div>
    </div>
  );
};
