import React from 'react'
import {NavLink} from 'react-router-dom'
import style from '../Dialogues.module.scss'

type DialogueItemType = {
   id: number
   name: string
}

const DialogueItem: React.FC<DialogueItemType> = (props) => {
   const {id, name} = props

   let path = '/dialogues/' + id

   return (
      <div className={style.dialogue + ' ' + style.active}>
         <NavLink to={path}>{name}</NavLink>
      </div>
   )
}

export default DialogueItem