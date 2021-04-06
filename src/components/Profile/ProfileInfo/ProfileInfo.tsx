import React from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from '../../Preloader/Preloader'
import {ProfileType} from '../../../redux/profile-reducer'
import {ProfileStatus} from './ProfileStatus'

type PropsType = {
   profile: ProfileType
   status: string
   updateUserStatus: (status: string) => void
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
   const {profile, status, updateUserStatus} = props

   if (!profile) {
      return <Preloader/>
   }

   return (
      <>
         <div className={style.descriptionBlock}>
            <img src={profile.photos.large} alt=""/>
            <div>Name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>{profile.lookingForAJob}</div>
            <div>Looking a job: {profile.lookingForAJobDescription}</div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
         </div>
      </>
   )
}
