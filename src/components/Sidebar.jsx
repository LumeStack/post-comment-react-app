import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside data-qa="profile-box" className={styles.sidebar}>
      <img
        data-qa="profile-cover-img"
        className={styles.cover}
        src="https://images.unsplash.com/photo-1606503778312-84ebd27ec624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Joaozinm.png" />
        <strong data-qa="profile-user-name">João Melo</strong>
        <span data-qa="profile-user-role">QA Engineer</span>
      </div>

      <footer>
        <a data-qa="edit-profile-button" href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
