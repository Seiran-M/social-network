import React from 'react'
import {compose} from 'redux'
import {connect, ConnectedProps} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'

import style from './Profile.module.scss'
import {Profile} from './Profile'
import {AppStateType} from '../../redux/redux-store'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer'

class ProfileContainer extends React.PureComponent<PropsType, AppStateType> {
   componentDidMount() {
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

   render() {
      const {profile, status, updateUserStatus} = this.props

      return (
         <div className={style.content}>
            <Profile {...this.props} profile={profile} status={status} updateUserStatus={updateUserStatus}/>
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

const connector = connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})
export default compose<React.ComponentType>(
   connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
   withRouter,
   withAuthRedirect,
   connector
)(ProfileContainer)

// types
type PropsType = RouteComponentProps<PathParamsType> & TProps
type PathParamsType = { userId: any }
type TProps = ConnectedProps<typeof connector>


