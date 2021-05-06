import React from 'react'
import {compose} from 'redux'
import {Route, withRouter} from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'

import './App.scss'
import {Navbar} from './components/Navbar/Navbar'
import {Music} from './components/Music/Music'
import {News} from './components/News/News'
import {Settings} from './components/Settings/Settings'
import DialoguesContainer from './components/Dialogues/DialoguesContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {AppStateType} from './redux/redux-store'
import {initializeApp} from './redux/app-reducer'
import {Preloader} from './common/Preloader/Preloader'


export class App extends React.Component<TProps, MapStateType> {
   componentDidMount() {
      this.props.initializeApp()
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }

      return (
         <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
               <Route path={'/dialogues'} render={() => <DialoguesContainer/>}/>
               <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
               <Route path={'/users'} render={() => <UsersContainer/>}/>
               <Route path={'/news'} render={() => <News/>}/>
               <Route path={'/music'} render={() => <Music/>}/>
               <Route path={'/settings'} render={() => <Settings/>}/>
               <Route path={'/login'} render={() => <Login/>}/>
            </div>
         </div>
      )
   }
}

const MapStateToProps = (state: AppStateType): MapStateType => {
   return {initialized: state.app.initialized}
}

const connector = connect(MapStateToProps, {initializeApp})

export default compose<React.ComponentType>(
   connect(MapStateToProps, {initializeApp}),
   withRouter,
   connector
)(App)

// types
type TProps = ConnectedProps<typeof connector>
type MapStateType = { initialized: boolean }