import React from 'react'
import style from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'

type PropsType = {
   newPostText: string
   posts: Array<PostsType>
   addPost: () => void
   updateNewPostText: (text: string) => void
}


export const MyPosts: React.FC<PropsType> = (props) => {

   const postsElement = props.posts.map(posts =>
      <Post key={posts.id} message={posts.message} likesCount={posts.likesCount} id={posts.id}/>)
   const newPostElement = React.createRef<any>()

   const onAddPost = () => props.addPost()
   const onPostChange = () => {
      const text = newPostElement.current.value
      props.updateNewPostText(text)
   }

   return (
      <div className={style.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}
                         value={props.newPostText}
                         onChange={onPostChange}
                         placeholder={'Enter your post'}>
               </textarea>
            </div>
            <div>
               <button className={style.btn} onClick={onAddPost}>Add post</button>
            </div>
         </div>
         <div className={style.posts}>
            <div className={style.post}>{postsElement}</div>
         </div>
      </div>
   )
}
