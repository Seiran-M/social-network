import React, {ChangeEvent} from 'react'
import s from './Dialogues.module.scss'
import DialogueItem from './DialoguesItem/DialoguesItem'
import Message from './Messages/Messages'
import {DialoguesPageType} from '../../redux/store'

type PropsType = {
   sendMessage: () => void
   updateNewMessageBody: (body: string) => void
   dialoguesPage: DialoguesPageType
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

   return (
      <div className={s.dialogues}>
         <div className={s.dialoguesItems}>
            {dialoguesElements}
         </div>
         <div className={s.messages}>
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
