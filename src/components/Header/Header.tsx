import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.scss'

type PropsType = {
   isAuth: boolean
   login: string | null
}

export const Header = (props: PropsType) => {
   return (
      <header className={style.header}>
         <img
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgbin.com%2Ffree-png%2Flast-samurai&psig=AOvVaw0SHaVNW2eZBI15MDfzF1-G&ust=1616419763886000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDLlIy_we8CFQAAAAAdAAAAABAU'
            alt=""/>
         <div className={style.loginBlock}>
            {props.isAuth ? props.login
               : < NavLink to={'/login'}> Login </NavLink>}
         </div>
      </header>
   )
}