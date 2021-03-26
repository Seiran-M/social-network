import React from 'react'
import style from './Profile.module.scss'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {getUserProfile, ProfileType} from '../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store'
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'


type PathParamsType = { userId: string | undefined }
type mapStateToPropsType = { profile: ProfileType, isAuth: boolean }
type mapDispatchToPropsType = { getUserProfile: (userId: string) => void }
type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = '2'
      }
      this.props.getUserProfile(userId)
   }

   render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>

      return (
         <div className={style.content}>
            <Profile {...this.props} profile={this.props.profile}/>
         </div>
      )
   }
}

export const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
   isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)