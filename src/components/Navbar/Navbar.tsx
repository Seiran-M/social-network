import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {

   return (
      <nav className={styles.nav}>
         <div className={`${styles.item} ${styles.active}`}>
            <NavLink to={'/profile'} activeClassName={styles.active}>Profile</NavLink>
         </div>
         <div className={styles.item}>
            <NavLink to={'/dialogues'} activeClassName={styles.active}>Messages</NavLink>
         </div>
         <div className={styles.item}>
            <NavLink to={'/users'} activeClassName={styles.active}>Users</NavLink>
         </div>
         <div className={styles.item}>
            <NavLink to={'/news'} activeClassName={styles.active}>News</NavLink>
         </div>
         <div className={styles.item}>
            <NavLink to={'/music'} activeClassName={styles.active}>Music</NavLink>
         </div>
         <div className={styles.item}>
            <NavLink to={'/settings'} activeClassName={styles.active}>Settings</NavLink>
         </div>
      </nav>
   )
}
