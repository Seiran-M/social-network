import React from 'react'
import {Header} from './Header'
import {connect, ConnectedProps} from 'react-redux'
import {getAuthUserData} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/redux-store'

class HeaderContainer extends React.Component<TProps, AppStateType> {
   componentDidMount() {
      this.props.getAuthUserData()
   }

   render() {
      return <Header isAuth={this.props.isAuth} login={this.props.login}/>
   }
}

const mapStateToProps = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

const connector = connect(mapStateToProps, {getAuthUserData})
export default connector(HeaderContainer)

type TProps = ConnectedProps<typeof connector>

