import React from 'react'
import {MyPosts} from './MyPosts'
import {StoreReduxType} from '../../../redux/redux-store'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer'

type PropsType = {
   store: StoreReduxType
}

export const MyPostsContainer: React.FC<PropsType> = (props) => {
   const state = props.store.getState()

   const addPost = () => props.store.dispatch(addPostAC())

   const onPostChange = (text: string) => {
      props.store.dispatch(updateNewPostTextAC(text))
   }

   return (
      <MyPosts newPostText={state.profilePage.newPostText}
               posts={state.profilePage.posts}
               updateNewPostText={onPostChange}
               addPost={addPost}/>
   )
}
