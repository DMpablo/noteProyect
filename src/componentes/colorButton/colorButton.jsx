import styles from "./colorButton.module.scss";

export const ColorButton = ({ color, click }) => (
  <button
    className={`${styles.colorButton} ${styles[color]}`}
    onClick={() => click(color)}
  />
);
