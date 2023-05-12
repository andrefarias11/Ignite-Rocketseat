import { ThumbsUp, Trash } from "phosphor-react"
import style from "./Comment.module.css" 
import { Avatar } from "./Avatar"

export function Comment() {
  return(
    <div className={style.comment}>

      <Avatar hasBorder={false} src="https://github.com/wenked.png" />

      <div className={style.commentBox}>

        <div className={style.commentContent}>

          <header>

            <div className={style.authorAndTime}>
              <strong>Wenked</strong>
              <time title='10 de maio de 2023' dateTime='2023-05-10'> Cerca de 1 hora atrás</time>
            </div>
              <button title="Deletar comentario">
                  <Trash size={20}/>
              </button>
          </header>
          <p>O melhor que a topzap tem !!!</p>

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