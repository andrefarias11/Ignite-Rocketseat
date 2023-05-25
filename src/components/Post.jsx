/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR  from 'date-fns/locale/pt-BR';
import style from './Post.module.css';
import { useState } from 'react';


export function Post({author, publishAt, content}) {

  const [comments, setComments] = useState([
   'Post top',
  ]);

  const publishDateFormated = format(publishAt, "d 'de' LLLL 'as' HH:mm'h'",{locale: ptBR});

  const publishDateRelativeToNow = formatDistanceToNow(publishAt,{
    locale: ptBR,
    addSuffix: true,
  });


  function handleCreatNewComment(){
    event.preventDefault();


    const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);
    event.target.comment.value = '';
  }

  

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>



        <time title={publishDateFormated} dateTime={publishAt.toISOString()}>
        {publishDateRelativeToNow}
        </time>


      </header>

      <div className={style.content}>
      {content.map(line => {
        if(line.type === 'paragraph'){
          return <p>{line.content}</p>;
        }else if(line.type === 'link'){
          return <p><a href="#">{line.content}</a></p>;
        }
      })}
      </div>


      <form onSubmit={handleCreatNewComment} className={style.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea 
        name='comment'
        placeholder='Deixe seu comentario'/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}

      </div>
      
    </article>
  )   
}