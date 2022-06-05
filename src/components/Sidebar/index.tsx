import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./index.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />

      <div
        className={styles.profile}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/62476762?s=500&v=4"
        />
        <strong>Lucas Marcel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a 
          href="#"
        >
          <PencilLine
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export { Sidebar };
