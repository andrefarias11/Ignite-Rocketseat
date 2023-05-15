
import style from './Avatar.module.css'

// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, src}){
  return(
    <img 
    className={hasBorder ? style.avatarWithBorder : style.avatar} 
    src={src} />

  );
}