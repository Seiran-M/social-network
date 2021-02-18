import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'

type PropsType = {
   newPostText: string
   posts: Array<PostsType>
   addPost: () => void
   updateNewPostText: (text: string) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {

   const postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
   const newPostElement = React.createRef<any>()
   const onAddPost = () => props.addPost()
   const onPostChange = () => {
      const text = newPostElement.current.value
      props.updateNewPostText(text)
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea placeholder={'Enter your post'}
                         ref={newPostElement}
                         value={props.newPostText}
                         onChange={onPostChange}>
               </textarea>
            </div>
            <button onClick={onAddPost}>Add post</button>
         </div>
         <div className={s.posts}>
            <div className={s.post}>{postsElement}</div>
         </div>
      </div>
   )
}
