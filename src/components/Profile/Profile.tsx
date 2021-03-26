import React from 'react'
import style from './Profile.module.scss'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {ProfileType} from '../../redux/profile-reducer'
import {Redirect} from 'react-router-dom'


type PropsType = {
   profile: ProfileType
}

export const Profile: React.FC<PropsType> = (props) => {

   return (
      <div className={style.content}>
         <ProfileInfo profile={props.profile}/>
         <MyPostsContainer/>
      </div>
   )
}