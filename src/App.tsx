import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogues} from './components/Dialogues/Dialogues'
import {BrowserRouter, Route} from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {ReduxStoreType} from './redux/redux-store'
import {DialoguesContainer} from './components/Dialogues/DialoguesContainer'
import UsersiContainer from './components/Users/UsersContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'


export const App: React.FC = () => {
   return (
      <BrowserRouter>
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
            </div>
         </div>
      </BrowserRouter>
   )
}
