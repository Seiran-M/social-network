import React from 'react'
import style from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'

export const Profile: React.FC<PropsType> = (props) => {
   const {profile, status, updateUserStatus} = props

   return (
      <div className={style.content}>
         <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
         <MyPostsContainer/>
      </div>
   )
}

// types
type PropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (status: string) => void
}
