import React from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
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
            {/*<img src={profile.photos.large} alt=""/>*/}
            <img src="https://www.google.com.tr/url?sa=i&url=https%3A%2F%2Fok.ru%2Fprofile%2F573058647374&psig=AOvVaw3HfOwswUBXICJYAXeEbbAd&ust=1618426094275000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCvhKTx--8CFQAAAAAdAAAAABAD" alt=""/>
            <div>Name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>{profile.lookingForAJob}</div>
            <div>Looking a job: {profile.lookingForAJobDescription}</div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
         </div>
      </>
   )
}
