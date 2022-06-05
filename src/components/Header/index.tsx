import logoImg from "../../assets/logo.svg";
import styles from "./index.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img 
        src={logoImg}
        alt="Logotipo do Ignite"
      />
      <strong>Ignite Feed</strong>
    </header>
  );
};

export { Header };
