import React from 'react'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'

export const Profile: React.FC = () => {

   return (
      <div className={s.content}>
         <ProfileInfo/>
         <MyPostsContainer/>
      </div>
   )
}