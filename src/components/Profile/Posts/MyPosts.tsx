import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsTypes, addPostAC, changeNewTextAC, PostsType} from "../../../redux/state";


type PropsType = {
   posts: Array<PostsType>
   message: string
   dispatch: (action: ActionsTypes) => void
}


export const MyPosts: React.FC<PropsType> = (props) => {
   const postsElement = props.posts.map(p =>
      <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
   // const newPostElement =React.createRef()
   const addPost = () => props.dispatch(addPostAC(props.message))
   const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(changeNewTextAC(e.currentTarget.value))
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea placeholder={'Enter your post'}
                         value={props.message}
                         onChange={newTextChangeHandler}>
               </textarea>
            </div>
            <button onClick={addPost}>Add post</button>
         </div>
         <div className={s.posts}>
            <div className={s.post}>{postsElement}</div>
         </div>
      </div>
   )
}
