import React from 'react'
import {compose} from 'redux'
import {connect, ConnectedProps} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import style from './Profile.module.scss'
import {Profile} from './Profile'
import {AppStateType} from '../../redux/redux-store'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from '../../redux/profile-reducer'

class ProfileContainer extends React.PureComponent<PropsType, AppStateType> {


   refreshProfile() {
      const {authorizedUserId, history, match, getUserProfile, getUserStatus} = this.props
      let userId = match.params.userId
      if (!userId) {
         userId = authorizedUserId || 15471
         if (!userId) {
            history.push('/login')
         }
      }
      getUserProfile(userId)
      getUserStatus(userId)
   }

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<AppStateType>, snapshot?: any) {
      if (this.props.match.params.userId !== prevProps.match.params.userId)
         this.refreshProfile()
   }

   render() {
      const {profile, status, updateUserStatus} = this.props

      return (
         <div className={style.content}>
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={profile}
                     status={status}
                     updateUserStatus={updateUserStatus}
                     savePhoto={this.props.savePhoto}
            />
         </div>
      )
   }
}

export const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id,
   isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto})
export default compose<React.ComponentType>(
   connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
   withRouter,
   withAuthRedirect,
   connector
)(ProfileContainer)

// types
type PropsType = RouteComponentProps<PathParamsType> & TProps
type PathParamsType = { userId: any }
type TProps = ConnectedProps<typeof connector>


