import React from 'react'
import {StoreReduxType} from '../../redux/redux-store'
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogues-reducer'
import {Dialogues} from './Dialogues'

type PropsType = {
   store: StoreReduxType
}

export const DialoguesContainer: React.FC<PropsType> = (props) => {
   const state = props.store.getState().dialoguesPage

   const onSendMessageClick = () => {
      props.store.dispatch(sendMessageAC())
   }
   const onNewMessageChange = (body: string) => {
      props.store.dispatch(updateNewMessageBodyAC(body))
   }

   return (
      <Dialogues updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialoguesPage={state}/>
   )
}
