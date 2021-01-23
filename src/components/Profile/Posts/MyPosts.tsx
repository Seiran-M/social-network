import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType, RootStateType} from "../../../redux/state";


type PropsType={
    posts: Array<PostsType>
}

const MyPosts:React.FC<PropsType> = (props) => {
    let postsElement = props.posts.map(p =>
        <Post  message={p.message} likesCount={p.likesCount} id={p.id}/>)

    // UI
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <div className={s.post}>{postsElement}</div>
            </div>
        </div>
    )
}
export default MyPosts;