import axios from 'axios'import {ProfileType} from '../redux/profile-reducer'const instance = axios.create({   withCredentials: true,   baseURL: `https://social-network.samuraijs.com/api/1.0/`,   headers: {      'API-KEY': '85f20b48-f9ce-40aa-b7ca-82ca81a13c9b'   }})// APIexport const usersAPI = {   getUsers(currentPage: number, pageSize: number) {      return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)         .then(response => {            return response.data         })   },   unfollowUser(userId: number) {      return instance.delete<UnfollowUserResponseType>(`follow/${userId}`)   },   followUser(userId: number) {      return instance.post<FollowUserResponseType>(`follow/${userId}`, {})   }}export const authAPI = {   me() {      return instance.get(`auth/me`)   },   login(email: string, password: string, rememberMe: boolean = false) {      return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe})   },   logOut() {      return instance.delete(`auth/login`)   }}export const profileAPI = {   getProfile(userId: number) {      return instance.get(`profile/` + userId)   },   getStatus(userId: number) {      return instance.get(`profile/status/` + userId)   },   updateStatus(status: string) {      return instance.put<UpdateStatusResponseType>(`profile/status`, {status})   },   savePhoto(photoFile: string | Blob) {      const formData = new FormData()      formData.append('image', photoFile)      debugger      return instance.put(`profile/photo`, formData, {         headers: {            'Content-Type': 'multipart/form-data'         }      })   },   saveProfile(formData: ProfileType) {      return instance.put(`profile`, formData)   }}//typestype UserType = {   id: number   name: string   status: string   photos: PhotosType   followed: boolean}type PhotosType = {   small: string   large: string}type UpdateStatusResponseType = {   resultCode: number   message: string   data: {}}type GetUsersResponseType = {   items: Array<UserType>   totalCount: number   error: string}type UnfollowUserResponseType = {   resultCode: number   message: string   data: {}}type FollowUserResponseType = {   resultCode: number   message: string   data: {}}type LoginResponseType = {   resultCode: number   messages: string   data: {}}