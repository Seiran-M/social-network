import {usersAPI} from '../api/api'import {Dispatch} from 'redux'import {ACTIONS_TYPE} from './actions'const initialState: UsersStateType = {   users: [],   pageSize: 10,   totalUsersCount: 0,   currentPage: 1,   isFetching: true,   followingInProgress: []}export const usersReducer = (state = initialState, action: ActionsType): UsersStateType => {   switch (action.type) {      case ACTIONS_TYPE.FOLLOW:         return {            ...state,            users: state.users.map(u => {               if (u.id === action.userId) {                  return {...u, followed: true}               }               return u            })         }      case ACTIONS_TYPE.UNFOLLOW:         return {            ...state,            users: state.users.map(user => {               if (user.id === action.userId) {                  return {...user, followed: false}               }               return user            })         }      case ACTIONS_TYPE.SET_USERS: {         return {...state, users: action.users}      }      case ACTIONS_TYPE.SET_CURRENT_PAGE: {         return {...state, currentPage: action.currentPage}      }      case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT: {         return {...state, totalUsersCount: action.totalCount}      }      case ACTIONS_TYPE.TOGGLE_IS_FETCHING: {         return {...state, isFetching: action.isFetching}      }      case ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS: {         return {            ...state,            followingInProgress: action.isFetching               ? [...state.followingInProgress, action.userId]               : state.followingInProgress.filter(id => id !== action.userId)         }      }      default:         return state   }}// actionsexport const followSuccess = (userId: number) => ({type: ACTIONS_TYPE.FOLLOW, userId} as const)export const unfollowSuccess = (userId: number) => ({type: ACTIONS_TYPE.UNFOLLOW, userId} as const)export const setUsers = (users: Array<Usertype>) => ({type: ACTIONS_TYPE.SET_USERS, users} as const)export const setCurrentPage = (currentPage: number) => ({type: ACTIONS_TYPE.SET_CURRENT_PAGE, currentPage} as const)export const setTotalUsersCount = (totalCount: number) =>   ({type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT, totalCount} as const)export const toggleIsFetching = (isFetching: boolean) => ({type: ACTIONS_TYPE.TOGGLE_IS_FETCHING, isFetching} as const)export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>   ({type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)// thunksexport const requestUsers = (page: number, pageSize: number) => {   return (dispatch: Dispatch) => {      dispatch(toggleIsFetching(true))      dispatch(setCurrentPage(page))      usersAPI.getUsers(page, pageSize)         .then(data => {            dispatch(toggleIsFetching(false))            dispatch(setUsers(data.items))            dispatch(setTotalUsersCount(data.totalCount))         })   }}export const follow = (userId: number) => {   return (dispatch: Dispatch) => {      dispatch(toggleFollowingProgress(true, userId))      usersAPI.followUser(userId)         .then(data => {            if (data.data.resultCode === 0) {               dispatch(followSuccess(userId))            }            dispatch(toggleFollowingProgress(false, userId))         })   }}export const unfollow = (userId: number) => {   return (dispatch: Dispatch) => {      dispatch(toggleFollowingProgress(true, userId))      usersAPI.unfollowUser(userId)         .then(data => {            if (data.data.resultCode === 0) {               dispatch(unfollowSuccess(userId))            }            dispatch(toggleFollowingProgress(false, userId))         })   }}// typesexport type UsersStateType = {   users: Array<Usertype>   pageSize: number   totalUsersCount: number   currentPage: number   isFetching: boolean   followingInProgress: any[]}export type Usertype = {   id: number   name: string   status: string   photos: PhotosType   followed: boolean}type PhotosType = {   small: string   large: string}export type ActionsType =   ReturnType<typeof followSuccess>   | ReturnType<typeof unfollowSuccess>   | ReturnType<typeof setUsers>   | ReturnType<typeof setCurrentPage>   | ReturnType<typeof setTotalUsersCount>   | ReturnType<typeof toggleIsFetching>   | ReturnType<typeof toggleFollowingProgress>