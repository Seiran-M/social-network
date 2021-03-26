import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {getAuthUserData} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/redux-store'

type MapStatePropsType = {
   isAuth: boolean,
   login: string | null
}
type MapDispatchPropsType = {
   getAuthUserData: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<PropsType> {

   componentDidMount() {
      this.props.getAuthUserData()
   }

   render() {
      return <Header isAuth={this.props.isAuth} login={this.props.login}/>
   }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)