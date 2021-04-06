import React from 'react'
import style from './Profile.module.scss'
import {Profile} from './Profile'
import {connect, ConnectedProps} from 'react-redux'
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'


type PathParamsType = { userId: any }
type PropsType = RouteComponentProps<PathParamsType> & TProps

class ProfileContainer extends React.Component<PropsType> {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 15471
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
})

const connector = connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})

type TProps = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
   connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
   withRouter,
   withAuthRedirect
)(ProfileContainer)


