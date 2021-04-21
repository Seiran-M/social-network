import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'

import {Header} from './Header'
import {logout} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component<TProps, AppStateType> {

   render() {
      const {isAuth, login, logout} = this.props

      return (
         <Header
            isAuth={isAuth}
            login={login}
            logout={logout}/>
      )
   }
}

const mapStateToProps = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

const connector = connect(mapStateToProps, {logout})
export default connector(HeaderContainer)

// types
type TProps = ConnectedProps<typeof connector>

