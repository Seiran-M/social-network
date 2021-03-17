import React from 'react'
import style from './Profile.module.scss'
import {Profile} from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {ProfileType, setUserProfile} from '../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store'
import {RouteComponentProps, withRouter} from 'react-router-dom'


type PathParamsType = {
   userId: string | undefined
}

type mapStateToPropsType = {
   profile: ProfileType
}

type mapDispatchToPropsType = {
   setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId){
         userId = '2';
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
         .then(response => {
            this.props.setUserProfile(response.data)
         })
   }

   render() {
      return (
         <div className={style.content}>
            <Profile {...this.props} profile={this.props.profile}/>
         </div>
      )
   }
}

export const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)