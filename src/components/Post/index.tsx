import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment, PComment } from "../Comment";
import styles from "./index.module.css";

type PostContent = {
  type: "paragraph" | "link",
  id: number;
  content: string;
  url?: string;
};

export interface PPost {
  id: number;
  publishedAt: Date;
  content: PostContent[];
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
};

function Post({
  author,
  content,
  publishedAt
}: PPost) {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<PComment[]>([]);
  const [newId, setNewId] = useState(comments.length);

  const publishedDateFormated = 
    format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR
    });

  const publishedDateRelativeToNow = 
    formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });

    
  function handleRemoveComment(id: number) {
    setComments(c => c.filter(_c => _c.id !== id));
  };

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();
    
    setComment("");
    setNewId(id => id + 1);
    setComments(c => [ ...c, {
      id: newId + 1,
      content: comment,
      onRemove: handleRemoveComment
    }]);
  };

  function handleOnChangeComment(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("");
    setComment(e.target.value)
  };

  function handleNewCommentIsInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  };

  const isNewCommentEmpty = comment === "";

  return (
    <article
      className={styles.post}
    >
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div
            className={styles.authorInfo}
          >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(c => {
          switch(c.type) {
            case "link":
              return (
                <p key={c.id}><a href={c.url || "#"}>{c.content}</a></p>
              );
            case "paragraph":
            default:
              return (
                <p key={c.id}>{c.content}</p>
              );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={comment}
          required
          onInvalid={handleNewCommentIsInvalid}
          onChange={handleOnChangeComment}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      {
        comments.length > 0 && <div className={styles.commentList}>
        {
          comments.map(c => {
            return (
              <Comment
                key={c.id}
                {...c}
              />
            );
          })
        }
      </div>
      }
    </article>
  );
};

export { Post };
