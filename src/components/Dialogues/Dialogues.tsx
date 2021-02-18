import React, {ChangeEvent} from 'react'
import s from './Dialogues.module.css'
import DialogueItem from './DialoguesItem/DialoguesItem'
import Message from './Messages/Messages'
import {StoreReduxType} from '../../redux/redux-store'
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogues-reducer'
import {updateNewPostTextAC} from '../../redux/profile-reducer'

type PropsType = {
   store: StoreReduxType
}

export const Dialogues: React.FC<PropsType> = (props) => {

   const state = props.store.getState().dialoguesPage

   const dialoguesElements = state.dialogues.map(d => <DialogueItem id={d.id} name={d.name}/>)
   const messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)
   const newMessageBody = state.newMessageBody

   const onSendMessageClick = () => props.store.dispatch(sendMessageAC())
   const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
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
