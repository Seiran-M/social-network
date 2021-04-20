import React from 'react'
import style from './MyPosts.module.scss'
import {Post, PostsType} from './Post/Post'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validator'
import {Textarea} from '../../../common/FormsContfolls/FormsControlls'


export const MyPosts = React.memo((props: PropsType) => {
   const postsElement = props.posts.map(posts =>
      <Post key={posts.id} message={posts.message} likesCount={posts.likesCount} id={posts.id}/>)
   const onAddPost = (values: AddNewPostFormDataType) => {
      props.addPost(values.newPostText)
   }

   const maxLength10 = maxLengthCreator(10)

   const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
      return (
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field name="newPostText"
                      component={Textarea}
                      placeholder="Enter your text"
                      validate={[required, maxLength10]}
               />
            </div>
            <div>
               <button className={style.btn}>Add post</button>
            </div>
         </form>
      )
   }
   const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

   return (
      <div className={style.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostReduxForm onSubmit={onAddPost}/>
         <div className={style.posts}>
            {postsElement}
         </div>
      </div>
   )
})

// types
type PropsType = {
   posts: Array<PostsType>
   newPostText: string
   addPost: (newPostText: string) => void
}
export type AddNewPostFormDataType = {
   newPostText: string
}