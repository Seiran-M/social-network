import React from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from '../../Preloader/Preloader'
import {ProfileType} from '../../../redux/profile-reducer'

type PropsType = {
   profile: ProfileType
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
   if (!props.profile) {
      return (
         <Preloader/>
      )
   }
   return (
      <>
         <div>
            <img src="https://www.pics4learning.com/images/pics-banner1-1900.jpg" alt=""/>
         </div>
         <div className={style.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            {/*<div>{props.profile.fullName}</div>*/}
            {/*<div>About me: {props.profile.aboutMe}</div>*/}
            {/*<div>{props.profile.lookingForAJob}</div>*/}
            {/*<div>Looking a job: {props.profile.lookingForAJobDescription}</div>*/}
         </div>
      </>
)
}
