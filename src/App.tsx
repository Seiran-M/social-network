import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogues} from './components/Dialogues/Dialogues'
import {BrowserRouter, Route} from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {ActionsType, StoreType} from './redux/store'
import {StoreReduxType} from './redux/redux-store'
import {DialoguesContainer} from './components/Dialogues/DialoguesContainer'
import UsersiContainer from './components/Users/UsersContainer'
import { FC } from 'react'
import UsersContainer from './components/Users/UsersContainer'


export const App: FC = () => {

   return (
      <BrowserRouter>
         <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
               <Route path={'/dialogues'} render={() => <DialoguesContainer />}/>
               <Route path={'/profile'} render={() => <Profile/>}/>
               <Route path={'/users'} render={() => <UsersContainer/>}/>
               <Route path={'/news'} render={() => <News/>}/>
               <Route path={'/music'} render={() => <Music/>}/>
               <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   )
}
