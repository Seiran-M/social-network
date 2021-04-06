import React from 'react'
import style from './Dialogues.module.scss'
import DialogueItem from './DialoguesItem/DialoguesItem'
import {Message} from './Messages/Message'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {DialoguesType, MessagesType} from '../../redux/dialogues-reducer'

export type DialoguesPageType = {
   dialogues: Array<DialoguesType>
   messages: Array<MessagesType>
   newMessageBody: string
}
type PropsType = {
   sendMessage: (newMessageBody:string) => void
   updateNewMessageBody: (body: string) => void
   dialoguesPage: DialoguesPageType
   isAuth: boolean
}

export const Dialogues: React.FC<PropsType> = (props) => {
   const {dialoguesPage} = props
   const state = dialoguesPage

   const dialoguesElements = state.dialogues.map(d => <DialogueItem id={d.id} key={d.id} name={d.name}/>)
   const messagesElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)
   // const newMessageBody = state.newMessageBody
   const addNewMessage = (values: FormDataType) => {
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

export type FormDataType = {
   newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <form>
            <Field component={'textarea'}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}/>
            <button>Send</button>
         </form>
      </form>
   )
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'DialoguesAddMessageForm'})(AddMessageForm)

