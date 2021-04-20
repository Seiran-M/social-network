import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

type PropsType = {
   isAuth: boolean
   login: string | null
   logout:()=>void
}

export const Header = (props: PropsType) => {
   const {isAuth, login, logout} = props

   return (
      <header className={style.header}>
         <img alt="samurai-img" src={'https://i.pinimg.com/564x/25/73/14/257314878858202f4cf6b9ca37981cf0.jpg'}/>
         <div className={style.loginBlock}>
            {
               isAuth
                  ? <div>{login}<button onClick={logout} className={style.logoutButton}>Log out</button></div>
                  : < NavLink to={'/login'}> Login </NavLink>
            }
         </div>
      </header>
   )
}