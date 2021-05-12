import React, {FC} from 'react'

import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'

export const Profile: FC<PropsType> = React.memo((props) => {
   const {profile, status, updateUserStatus, isOwner, savePhoto, saveProfile} = props

   return (
      <div className={styles.content}>
         <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile}
                      status={status} updateUserStatus={updateUserStatus} saveProfile={saveProfile}/>
         <MyPostsContainer/>
      </div>
   )
})

// types
type PropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (status: string) => void
   isOwner:boolean
   savePhoto:(file:any)=>void
   saveProfile:(profile:ProfileType)=>void
}
