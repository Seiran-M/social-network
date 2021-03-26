import React, {ChangeEvent} from 'react'
import style from './Dialogues.module.scss'
import DialogueItem from './DialoguesItem/DialoguesItem'
import Message from './Messages/Messages'
import {DialoguesPageType} from '../../redux/store'
import {Login} from '../Login/Login'
import { Redirect } from 'react-router-dom'

type PropsType = {
   sendMessage: () => void
   updateNewMessageBody: (body: string) => void
   dialoguesPage: DialoguesPageType
   isAuth: boolean
}

export const Dialogues: React.FC<PropsType> = (props) => {
   const state = props.dialoguesPage

   const dialoguesElements = state.dialogues.map(d => <DialogueItem id={d.id} key={d.id} name={d.name}/>)
   const messagesElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)
   const newMessageBody = state.newMessageBody

   const onSendMessageClick = () => props.sendMessage()
   const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const body = e.currentTarget.value
      props.updateNewMessageBody(body)
   }

if (!props.isAuth) return <Redirect to={'/login'}/>

   return (
      <div className={style.dialogues}>
         <div className={style.dialoguesItems}>
            {dialoguesElements}
         </div>
         <div className={style.messages}>
            {messagesElements}
            <div>
               <textarea placeholder={'Enter your message'}
                         value={newMessageBody}
                         onChange={onNewMessageChange}>
               </textarea>
            </div>
            <button onClick={onSendMessageClick}>Send</button>
         </div>
      </div>
   )
}
