import React from 'react'
import styles from '../Dialogues.module.scss'

export const Message: React.FC<MessageType> = (props) => {
   const {message} = props
   return (
      <div className={styles.message}> {message} </div>
   )
}

// types
type MessageType = {
   id: number
   message: string
}