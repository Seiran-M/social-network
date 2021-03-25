import {combineReducers, createStore} from 'redux'import {profileReducer} from './profile-reducer'import dialoguesReducer from './dialogues-reducer'import sidebarReducer from './sidebar-reducer'import usersReducer from './users-reducer'import {authReducer} from './auth-reducer'const rootReducer = combineReducers({   profilePage: profileReducer,   dialoguesPage: dialoguesReducer,   sidebar: sidebarReducer,   usersPage: usersReducer,   auth: authReducer,})export type RootReducerType = typeof rootReducerexport type AppStateType = ReturnType<RootReducerType>export type ReduxStoreType = typeof storeexport const store = createStore(rootReducer)// @ts-ignorewindow.store = store