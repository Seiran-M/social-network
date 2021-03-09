import {DialoguesType, MessagesType} from './store'export enum ACTIONS_TYPE {   SEND_MESSAGE = 'SEND_MESSAGE',   UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',}type InitialStateType = {   dialogues: Array<DialoguesType>   messages: Array<MessagesType>   newMessageBody: string}const initialState = {   dialogues: [      {id: 1, name: 'Seiran'},      {id: 2, name: 'Elviza'},      {id: 3, name: 'Emir'},      {id: 4, name: 'Mustafa'},      {id: 5, name: 'Ainuddin'},      {id: 6, name: 'Alim'},   ],   messages: [      {id: 0, message: 'Hi'},      {id: 1, message: 'Hello'},      {id: 2, message: 'Bye'},   ],   newMessageBody: '',}export type SendMessageActionType = {   type: typeof ACTIONS_TYPE.SEND_MESSAGE}export type UpdateNewMessageBodyActionType = {   type: typeof ACTIONS_TYPE.UPDATE_NEW_MESSAGE_BODY   body: string}export type ActionsType = SendMessageActionType | UpdateNewMessageBodyActionTypeconst dialoguesReducer = (state = initialState, action: ActionsType): InitialStateType => {   switch (action.type) {      case ACTIONS_TYPE.UPDATE_NEW_MESSAGE_BODY:         return {            ...state,            newMessageBody: action.body         }      case ACTIONS_TYPE.SEND_MESSAGE:         const body = state.newMessageBody         return {            ...state,            newMessageBody: '',            messages: [...state.messages, {id: new Date().getTime(), message: body}]         }      default:         return state   }}export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyActionType => {   return {type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE_BODY, body}}export const sendMessageAC = (): SendMessageActionType => {   return {type: ACTIONS_TYPE.SEND_MESSAGE}}export default dialoguesReducer