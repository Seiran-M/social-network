import React from 'react';
import s from '../Dialogues.module.scss';


type MessageType = {
   id: number
   message: string
}

export const Message: React.FC<MessageType> = (props) => {
   return (
      <div className={s.message}> {props.message} </div>
   )
}


export default Message;