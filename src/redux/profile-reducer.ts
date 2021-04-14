import {Dispatch} from 'redux'import {profileAPI} from '../api/api'import {ACTIONS_TYPE} from './actions'const initialState = {   posts: [      {id: 0, message: 'Hi, how are you?', likesCount: 12},      {id: 1, message: 'It\'s my first post!', likesCount: 55},      {id: 2, message: 'Bye', likesCount: 0},      {id: 3, message: 'Good', likesCount: 30},   ],   profile: null,   status: '',   newPostText: '',}export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {   switch (action.type) {      case ACTIONS_TYPE.ADD_POST:         const newPost = {id: new Date().getTime(), message: action.newPostText, likesCount: 0,}         return {            ...state,            posts: [...state.posts, newPost],         }      case ACTIONS_TYPE.SET_USER_PROFILE: {         return {            ...state,            profile: action.profile         }      }      case ACTIONS_TYPE.SET_STATUS: {         return {            ...state,            status: action.status         }      }      default:         return state   }}// actionsexport const addPost = (newPostText: string) => ({type: ACTIONS_TYPE.ADD_POST, newPostText} as const)export const setUserProfile = (profile: ProfileType) => ({type: ACTIONS_TYPE.SET_USER_PROFILE, profile} as const)export const setUserStatus = (status: string) => ({type: ACTIONS_TYPE.SET_STATUS, status} as const)// thunksexport const getUserProfile = (userId: number) => (dispatch: Dispatch) => {   profileAPI.getProfile(userId)      .then(response => {         dispatch(setUserProfile(response.data))      })}export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {   profileAPI.getStatus(userId)      .then(response => {         dispatch(setUserStatus(response.data))      })}export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {   profileAPI.updateStatus(status)      .then(response => {         if (response.data.resultCode === 0) {            dispatch(setUserStatus(status))         }      })}// typesexport type PhotosType = {   small: string | undefined   large: string | undefined}export type ContactsType = {   facebook: string | null   website: string | null   vk: string | null   twitter: string | null   instagram: string | null   youtube: string | null   github: string | null   mainLink: null,}export type ProfileType = {   aboutMe: string   contacts: ContactsType   photos: PhotosType   lookingForAJob: boolean   lookingForAJobDescription: string   fullName: string   userId: number}type PostsType = {   id: number   message: string   likesCount: number}type InitialStateType = {   posts: Array<PostsType>   profile: any   status: string   newPostText: string}export type ActionsType =   ReturnType<typeof addPost>   | ReturnType<typeof setUserProfile>   | ReturnType<typeof setUserStatus>