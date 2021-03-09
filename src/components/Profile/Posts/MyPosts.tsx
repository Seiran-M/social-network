import React, {FC} from 'react'
import s from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'

type PropsType = {
   newPostText: string
   posts: Array<PostsType>
   addPost: () => void
   updateNewPostText: (text: string) => void
}


export const MyPosts: FC<PropsType> = (props) => {

   const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)
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
               <textarea ref={newPostElement}
                         value={props.newPostText}
                         onChange={onPostChange}
                         placeholder={'Enter your post'}>
               </textarea>
            </div>
            <div>
               <button className={s.btn} onClick={onAddPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            <div className={s.post}>{postsElement}</div>
         </div>
      </div>
   )
}
