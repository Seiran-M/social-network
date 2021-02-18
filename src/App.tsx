import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogues} from './components/Dialogues/Dialogues'
import {BrowserRouter, Route} from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import {ActionsTypes, StoreType} from './redux/store'
import {StoreReduxType} from './redux/redux-store'

type PropsType = {
   store: StoreReduxType
   dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<PropsType> = (props) => {
   const state = props.store.getState()
   return (
      <BrowserRouter>
         <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
               <Route path={'/dialogues'} render={() => <Dialogues store={props.store}/>}/>
               <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
               <Route path={'/news'} render={() => <News/>}/>
               <Route path={'/music'} render={() => <Music/>}/>
               <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

// dispatch={props.store.dispatch.bind(props.store)}
