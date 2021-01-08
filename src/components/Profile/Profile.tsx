import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.pics4learning.com/images/pics-banner1-1900.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;