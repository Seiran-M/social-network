import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from '../Dialogues.module.scss'

export const DialogueItem: React.FC<DialogueItemType> = (props) => {
   const {id, name} = props

   let path = '/dialogues/' + id

   return (
      <div className={styles
         .dialogue + ' ' + styles
         .active}>
         <NavLink to={path}>{name}</NavLink>
      </div>
   )
}

// types
type DialogueItemType = {
   id: number
   name: string
}