import React, {ChangeEvent} from 'react';
import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialoguesItem';
import Message from './Messages/Messages';
import {ActionsTypes, DialoguesPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/state';

type PropsType = {
   dialogPage: DialoguesPageType
   dispatch: (action: ActionsTypes) => void
}

export const Dialogues: React.FC<PropsType> = (props) => {
   const dialoguesElements = props.dialogPage.dialogues.map(d => <DialogueItem id={d.id} name={d.name}/>)
   const messagesElements = props.dialogPage.messages.map(m => <Message id={m.id} message={m.message}/>)
   const newMessageBody = props.dialogPage.newMessageBody

   const onSendMessageClick = () => props.dispatch(sendMessageAC())
   const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
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
