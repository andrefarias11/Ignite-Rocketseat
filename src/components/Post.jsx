import { Comment } from './Comment';
import style from './Post.module.css';

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src="https://github.com/andrefarias11.png" />
          <div className={style.authorInfo}>
            <strong>André</strong>
            <span>FullStack Developer</span>
          </div>
        </div>



        <time title='10 de maio de 2023' dateTime='2023-05-10'>Publicado há 1 hora</time>
      </header>

      <div className={style.content}>
        <p>
          Fala Galera beleza? Estou fazendo um curso de ReactJS e estou aprendendo bastante!
        </p>
        <p>
        Segue meu link do meu repositorio:
        </p>
        <p><a href="https://github.com/andrefarias11/Ignite-Rocketseat">github.com/andrefarias11/Ignite-Rocketseat</a> </p>
        <p> 
          <a href="#"> #Rocktseat</a>{'   '}
          <a href="#"> #Ignite</a>{' '} 
          <a href="#"> #NewProject</a>
        </p>
      </div>


      <form className={style.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder='Deixe seu comentario'/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />

      </div>
      
    </article>
  )   
}