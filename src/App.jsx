import {Post} from "./Post";
import {Header} from "./components/Header";

import './global.css';

export function App() {

  return (
    <div>

    <Header/>

    <Post 
    author = "André Farias" 
    content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. "/>

    <Post 
    author = "Flavia" 
    content= "Novo Post "/>
    </div>
  )
}
