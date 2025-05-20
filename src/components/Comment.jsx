import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Joaozinm.png" />
      <div data-qa="comment-box" className={styles.commentBox}>
        <div data-qa="comment-info-box" className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong data-qa="comment-name">Kevin Malone</strong>
              <time title="11 de Maio ãs 04:20" dateTime="2022-08-20">
                Publicado a 1h
              </time>
            </div>
            <button
              data-qa="delete-button"
              onClick={handleDeleteComment}
              title="Deletar Comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p data-qa="comment-text">{content}</p>
        </div>
        <footer>
          <button data-qa="like-button" onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
