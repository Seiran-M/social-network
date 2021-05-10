import React, {ChangeEvent, FC} from 'react'

import styles from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
import {ProfileType} from '../../../redux/profile-reducer'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import userPhoto from './../../../assets/images/user.png'

export const ProfileInfo: FC<PropsType> = React.memo((props) => {
   const {profile, status, updateUserStatus, isOwner, savePhoto} = props

   if (!profile) {
      return <Preloader/>
   }
   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files && e.currentTarget.files.length) {
         savePhoto(e.currentTarget.files[0])
      }
   }

   return (
      <>
         <div className={styles.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={styles.userPhoto} alt={'profile'}/>
            <div>
               {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
            <div>Name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>{profile.lookingForAJob}</div>
            <div>Looking a job: {profile.lookingForAJobDescription}</div>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
         </div>
      </>
   )
})

// types
type PropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (file: any) => void
}