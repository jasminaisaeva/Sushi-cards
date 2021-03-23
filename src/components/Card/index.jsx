import React from 'react'
import { Footer } from '../Footer';
import css from './Card.module.css'

//  export function Card(){
    
// }

 const Card =({img,title,title1,sum,title2,title3})=>{

    return <div  className={css.Card}>
       
        <img src={img}/>
      
        <h3>{title}</h3>
        <div className={css.Title1}>{title1}</div>
        <div className={css.Sum}>{sum}</div>
        <div className={css.Title2}>{title2}</div>
        <div className={css.Title3}>{title3}</div>
        <div> <Footer /></div>

      
    
    </div>
 }
export default Card