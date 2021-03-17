import React from 'react'
import s from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'


type PropsType = {
   profile: ProfileType
}


export const Profile: React.FC<PropsType> = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo profile={props.profile}/>
         <MyPostsContainer/>
      </div>
   )
}