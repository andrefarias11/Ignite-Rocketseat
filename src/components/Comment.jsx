import { ThumbsUp, Trash } from "phosphor-react"
import style from "./Comment.module.css" 

export function Comment() {
  return(
    <div className={style.comment}>

      <img src="https://github.com/andrefarias11.png" />

      <div className={style.commentBox}>

        <div className={style.commentContent}>

          <header>

            <div className={style.authorAndTime}>
              <strong>André Farias</strong>
              <time title='10 de maio de 2023' dateTime='2023-05-10'> Cerca de 1 hora atrás</time>
            </div>
              <button title="Deletar comentario">
                  <Trash size={20}/>
              </button>
          </header>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam distinctio nesciunt impedit minus cumque illo explicabo quibusdam, alias labore molestias incidunt quo a iste excepturi ratione deserunt est eius culpa!</p>

        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span> 50</span>
          </button>
        </footer>

      </div>

    </div>
  )
}