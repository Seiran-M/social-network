import React from 'react'
import style from './Profile.module.scss'
import {Profile} from './Profile'
import {connect, ConnectedProps} from 'react-redux'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component<PropsType, AppStateType> {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId || 15471;
         if (!userId) {
            this.props.history.push("/login")
         }
      }
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }

   render() {
      return (
         <div className={style.content}>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
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


