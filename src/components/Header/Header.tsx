import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

type PropsType = {
   isAuth: boolean
   login: string | null
}

export const Header = (props: PropsType) => {
   const {isAuth, login} = props

   return (
      <header className={style.header}>
         <img alt="samurai-img" src={'https://i.pinimg.com/564x/25/73/14/257314878858202f4cf6b9ca37981cf0.jpg'}/>
         <div className={style.loginBlock}>
            {
               isAuth
                  ? login
                  : < NavLink to={'/login'}> Login </NavLink>
            }
         </div>
      </header>
   )
}