import {AppStateType} from '../../redux/redux-store'
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogues-reducer'
import {Dialogues} from './Dialogues'
import {connect} from 'react-redux'

//
// type PropsType = {
//    store: StoreReduxType
// }
//
// export const DialoguesContainer: React.FC<PropsType> = (props) => {
//    const state = props.store.getState().dialoguesPage
//
//    const onSendMessageClick = () => {
//       props.store.dispatch(sendMessageAC())
//    }
//    const onNewMessageChange = (body: string) => {
//       props.store.dispatch(updateNewMessageBodyAC(body))
//    }
//
//    return (
//       <Dialogues updateNewMessageBody={onNewMessageChange}
//                  sendMessage={onSendMessageClick}
//                  dialoguesPage={state}/>
//    )
// }

const mapStateToProps = (state: AppStateType) => {
   return {
      dialoguesPage: state.dialoguesPage
   }
}
const mapDispatchToProps = (dispatch: typeof sendMessageAC | typeof updateNewMessageBodyAC) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageAC())
      },
      updateNewMessageBody: (body: string) => {
         dispatch(updateNewMessageBodyAC(body))
      }
   }
}

export const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)
