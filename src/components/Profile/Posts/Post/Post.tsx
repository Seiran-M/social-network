import React from 'react'

import styles from './Post.module.scss'
import userPhoto from '../../../../assets/images/user.png'


export const Post: React.FC<PropsType> = (props) => {
   const {message, likesCount} = props
   return (
      <div className={styles.item}>
         <img src={userPhoto} className={styles.userPhoto}/>
         {message}
         <div>
            {likesCount}
            <span> Likes</span>
         </div>
      </div>
   )
}

// types
export type PostsType = {
   id: number
   message: string
   likesCount: number
}
type PropsType = PostsType