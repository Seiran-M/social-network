import React from 'react'
import style from './MyPosts.module.scss'
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type PropsType = {
   posts: Array<PostsType>
   newPostText: string
   addPost: (newPostText: string) => void
}
export type AddNewPostFormDataType = {
   newPostText: string
}

export const MyPosts = React.memo((props: PropsType) => {

   const postsElement = props.posts.map(posts =>
      <Post key={posts.id} message={posts.message} likesCount={posts.likesCount} id={posts.id}/>)
   const onAddPost = (values: AddNewPostFormDataType) => {
      props.addPost(values.newPostText)
   }

   const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
      return (
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field name='newPostText'
                      component={'textarea'}/>
            </div>
            <div>
               <button className={style.btn}>Add post</button>
            </div>
         </form>
      )
   }
   const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

   return <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={onAddPost}/>
      <div className={style.posts}>
         <div className={style.post}>{postsElement}</div>
      </div>
   </div>
})
