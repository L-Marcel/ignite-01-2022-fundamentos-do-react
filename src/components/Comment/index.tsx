import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./index.module.css";

export interface PComment {
  id: number;
  content: string;
  onRemove: (id: number) => void;
};

function Comment({ 
  id, 
  content,
  onRemove
}: PComment) {
  const [likeCount, setLikeCount] = useState(0);

  function handleOnLikeComment() {
    setLikeCount(c => c + 1)
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/62476762?s=500&v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Marcel</strong>

              <time 
                title="11 de maio - 00:15:00"
                dateTime="2022-05-11 00:15:00"
              >Cerca de 1h atrás</time>
            </div>

            <button 
              title="Deletar comentário"
              onClick={() => onRemove(id)}
            >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleOnLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { Comment };
