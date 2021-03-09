import {MyPosts} from './MyPosts'
import {AppStateType} from '../../../redux/redux-store'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer'
import {connect} from 'react-redux'


const mapStateToProps = (state: AppStateType) => {
   return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
   }
}

const mapDispatchToProps = (dispatch: any) => {
   return {
      updateNewPostText: (text: string) => {
         dispatch(updateNewPostTextAC(text))
      },
      addPost: () => {dispatch(addPostAC())}
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)