import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType, RootStateType} from "../../redux/state";


type PropsType={
    profilePage: ProfilePageType
}

const Profile:React.FC<PropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    )
}
export default Profile;