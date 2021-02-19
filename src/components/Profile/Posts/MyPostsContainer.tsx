import {MyPosts} from './MyPosts'
import {AppStateType} from '../../../redux/redux-store'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer'
import {connect} from 'react-redux'

//
// type PropsType = {
//    store: StoreReduxType
// }
//
// export const MyPostsContainer: React.FC<PropsType> = (props) => {
//    const state = props.store.getState()
//
//    const addPost = () => props.store.dispatch(addPostAC())
//
//    const onPostChange = (text: string) => {
//       props.store.dispatch(updateNewPostTextAC(text))
//    }
//    return (
//       <MyPosts newPostText={state.profilePage.newPostText}
//                posts={state.profilePage.posts}
//
//                updateNewPostText={onPostChange}
//                addPost={addPost}/>
//    )
// }

const mapStateToProps = (state: AppStateType) => {
   return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
   }
}
const mapDispatchToProps = (dispatch: typeof updateNewPostTextAC | typeof addPostAC) => {
   return {
      addPost: () => {
         dispatch(addPostAC())
      },
      updateNewPostText: (text: string) => {
         dispatch(updateNewPostTextAC(text))
      }
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
