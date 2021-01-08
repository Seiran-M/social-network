import React from 'react'
import s from './Post.module.css'


const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFwaTehDtP-aA/profile-displayphoto-shrink_100_100/0/1573385352014?e=1615420800&v=beta&t=MIgwUVltM_S8zNvLZPG0zmLiGYwbnC5UDbVLzPMVOt8"/>
            {props.message}
            <div>
                {props.likesCount}
                <span> Likes</span>
            </div>
        </div>
    )
}
export default Post