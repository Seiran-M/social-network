import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

export const Header:FC<PropsType> =React.memo( (props) => {
   const {isAuth, login, logout} = props

   return (
      <header className={styles.header}>
         <img alt="samurai-img" src={'https://i.pinimg.com/564x/25/73/14/257314878858202f4cf6b9ca37981cf0.jpg'}/>
         <div className={styles.loginBlock}>
            {
               isAuth
                  ? <div>{login}<button onClick={logout} className={styles.logoutButton}>Log out</button></div>
                  : < NavLink to={'/login'}> Login </NavLink>
            }
         </div>
      </header>
   )
})

// types
type PropsType = {
   isAuth: boolean
   login: string | null
   logout:()=>void
}
