import styles from "./Header.module.css";
import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Foguete" />
      <div  className={styles.title}>
        <p>to</p>
        <p>do</p>
      </div>
    </header>
  );
}
