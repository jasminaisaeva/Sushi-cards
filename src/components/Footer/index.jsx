import React from 'react'
import css from './Footer.module.css'

export const Footer = () => {
    return(
        <div>
            <div>
                <button className={css.Plus}>-</button>
                <input type="text"  placeholder="1"/>
                <button className={css.Plus1}>+</button>
            </div>
            <div className={css.Add}>ДОБАВИТЬ В КОРЗИНУ</div>
        </div>
    )
}