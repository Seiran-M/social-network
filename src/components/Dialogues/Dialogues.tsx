import React from 'react'
import style from './Dialogues.module.scss'
import DialogueItem from './DialoguesItem/DialoguesItem'
import {Message} from './Messages/Message'
import {TProps} from './DialoguesContainer'
import {AddMessageFormRedux} from './AddMessageForm/AddMessageForm'


export const Dialogues: React.FC<TProps> = (props) => {
   const {dialoguesPage} = props
   const state = dialoguesPage

   const dialoguesElements = state.dialogues.map(d => <DialogueItem id={d.id} key={d.id} name={d.name}/>)
   const messagesElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)

   const addNewMessage = (values: any) => {
      props.sendMessage(values.newMessageBody)
   }
   // if (!props.isAuth) return <Redirect to={'/login'}/>
   return (
      <div className={style.dialogues}>
         <div className={style.dialoguesItems}>
            {dialoguesElements}
         </div>
         <div className={style.messages}>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
         </div>
      </div>
   )
}

