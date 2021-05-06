import React, {FC} from 'react'
import styles from './Dialogues.module.scss'
import {DialogueItem} from './DialoguesItem/DialoguesItem'
import {Message} from './Messages/Message'
import {TProps} from './DialoguesContainer'
import {AddMessageFormRedux} from './AddMessageForm/AddMessageForm'


export const Dialogues: FC<TProps> = React.memo((props) => {
   const {dialoguesPage, sendMessage} = props
   const state = dialoguesPage

   const dialoguesElements = state.dialogues.map(d => <DialogueItem id={d.id} key={d.id} name={d.name}/>)
   const messagesElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)

   const addNewMessage = (values: any) => {
      sendMessage(values.newMessageBody)
   }
   // if (!props.isAuth) return <Redirect to={'/login'}/>
   return (
      <div className={styles.dialogues}>
         <div className={styles.dialoguesItems}>
            {dialoguesElements}
         </div>
         <div className={styles.messages}>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
         </div>
      </div>
   )
})

