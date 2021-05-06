import React, {FC} from 'react'

import style from './ProfileInfo.module.css'
import {Preloader} from '../../../common/Preloader/Preloader'
import {ProfileType} from '../../../redux/profile-reducer'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'

export const ProfileInfo: FC<PropsType> = React.memo((props) => {
   const {profile, status, updateUserStatus} = props

   if (!profile) {
      return <Preloader/>
   }

   return (
      <>
         <div className={style.descriptionBlock}>
            <img src={profile && profile.photos ? profile.photos.large : 'https://www.google.com.tr/url?sa=i&url=https%3A%2F%2Fok.ru%2Fprofile%2F573058647374&psig=AOvVaw3HfOwswUBXICJYAXeEbbAd&ust=1618426094275000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCvhKTx--8CFQAAAAAdAAAAABAD'} alt={'profile'}/>
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
}
