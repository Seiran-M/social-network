import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {ActionsTypes, ProfilePageType, StoreType} from '../../redux/store'
import {MyPostsContainer} from './Posts/MyPostsContainer'
import {StoreReduxType} from '../../redux/redux-store'

type PropsType = {
   store: StoreReduxType
}

export const Profile: React.FC<PropsType> = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo/>
         <MyPostsContainer store={props.store} />
      </div>
   )
}