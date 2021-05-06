import {connect} from 'react-redux'

import {MyPosts} from './MyPosts'
import {AppStateType} from '../../../redux/redux-store'
import {addPost} from '../../../redux/profile-reducer'


const mapStateToProps = (state: AppStateType) => {

   return (
      {
         newPostText: state.profilePage.newPostText,
         posts: state.profilePage.posts
      }
   )
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)