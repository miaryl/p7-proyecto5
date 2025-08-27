import styles from './Header.module.scss';
import instagram from "../../assets/instagram.svg";
import info from "../../assets/info.svg";

export default function Header() {
  return (
      <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.brand}>¿Pregunta del usuario?</span>

        <div className={styles.actions}>
          <img src={instagram} alt="" aria-hidden="true" className={styles.icon} />
          <img src={info} alt="" aria-hidden="true" className={styles.icon} />
        </div>
        </div>
      
    </header>
  );
}
