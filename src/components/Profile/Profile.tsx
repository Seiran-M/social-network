import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./Posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PropsType = {
   profilePage: ProfilePageType
   dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<PropsType> = (props) => {

   return (
      <div className={s.content}>
         <ProfileInfo/>
         <MyPosts posts={props.profilePage.posts}
                  message={props.profilePage.messageForNewPost}
                  dispatch={props.dispatch}
         />
      </div>
   )
}