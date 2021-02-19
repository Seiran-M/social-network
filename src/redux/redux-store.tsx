import {combineReducers, createStore} from 'redux'import profileReducer from './profile-reducer'import dialoguesReducer from './dialogues-reducer'import sidebarReducer from './sidebar-reducer'const rootReducer = combineReducers({   profilePage: profileReducer,   dialoguesPage: dialoguesReducer,   sidebar: sidebarReducer,})type RootReducerType= typeof rootReducerexport type AppStateType = ReturnType<RootReducerType>export const store = createStore(rootReducer)export type StoreReduxType = typeof store