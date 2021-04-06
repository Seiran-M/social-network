import {MyPosts} from './MyPosts'
import {AppStateType} from '../../../redux/redux-store'
import {addPost} from '../../../redux/profile-reducer'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'


const mapStateToProps = (state: AppStateType) => {
   return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
   }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      addPost: (newPostText: string) =>
         dispatch(addPost(newPostText))
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)