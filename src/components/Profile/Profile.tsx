import React, {FC} from 'react'

import styles from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'

export const Profile: FC<PropsType> = React.memo((props) => {
   const {profile, status, updateUserStatus} = props

   return (
      <div className={styles.content}>
         <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
         <MyPostsContainer/>
      </div>
   )
})

// types
type PropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (status: string) => void
}
