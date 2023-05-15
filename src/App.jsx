
import {Header} from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://www.github.com/rafaelbogfreitas.png',
      name: 'Rafael Bogfreitas',
      role: 'Software Engineer',
      
    },
    content:[
      {type : 'paragraph', content: 'Fala galera'},
      {type : 'paragraph', content: 'Meu novo portifolio'},
    ],
    publishAt: new Date('2023-05-15 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://www.github.com/rafaelbogfreitas.png',
      name: 'Andre Farias',
      role: 'Developer Junior',
      
    },
    content:[
      {type : 'paragraph', content: 'Fala galera'},
      {type : 'paragraph', content: 'Meu novo portifolio'},
    ],
    publishAt: new Date('2023-05-15 21:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {posts.map(post => {
            return (<Post 
              author={post.author}
              content={post.content}
              publishAt={post.publishAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
