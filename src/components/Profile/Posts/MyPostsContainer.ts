import {MyPosts} from './MyPosts'
import {AppStateType} from '../../../redux/redux-store'
import {addPost, updateNewPostText} from '../../../redux/profile-reducer'
import {connect} from 'react-redux'


const mapStateToProps = (state: AppStateType) => {
   return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
   }
}

export const MyPostsContainer = connect(mapStateToProps, {updateNewPostText,addPost})(MyPosts)