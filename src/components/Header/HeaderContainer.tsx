import React from 'react'
import {Header} from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/redux-store'

type MapStatePropsType = {
   isAuth: boolean,
   login: string | null,
}
type MapDispatchPropsType = { setAuthUserData: (id: number, email: string, login: string) => void }
type PropsType = MapStatePropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<PropsType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               let {id, email, login} = response.data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
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

// @ts-ignore
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)