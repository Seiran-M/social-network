import React from 'react'

import styles from './Post.module.scss'


export const Post: React.FC<PropsType> = (props) => {
   const {message, likesCount} = props
   return (
      <div className={styles.item}>
         <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQF8WT8MCWno9A/profile-displayphoto-shrink_400_400/0/1610184491326?e=1616025600&v=beta&t=Sksu7Fn0AnuM409Cw7vTwwPowhp3JXJ20N-qyxPdN70"/>
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