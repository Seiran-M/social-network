import React from 'react'
import style from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'


type PropsType = {
   profile: ProfileType
}

export const Profile: React.FC<PropsType> = (props) => {

   const {profile} = props

   return (
      <div className={style.content}>
         <ProfileInfo profile={profile}/>
         <MyPostsContainer/>
      </div>
   )
}