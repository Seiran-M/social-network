import React from 'react'
import s from './Post.module.css'
import {PostsType} from "../../../../redux/state";

type PropsType = PostsType

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQF8WT8MCWno9A/profile-displayphoto-shrink_400_400/0/1610184491326?e=1616025600&v=beta&t=Sksu7Fn0AnuM409Cw7vTwwPowhp3JXJ20N-qyxPdN70"/>
            {props.message}
            <div>
                {props.likesCount}
                <span> Likes</span>
            </div>
        </div>
    )
}

export default Post
