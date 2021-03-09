import {AppStateType} from '../../redux/redux-store'
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogues-reducer'
import {Dialogues} from './Dialogues'
import {connect} from 'react-redux'


const mapStateToProps = (state: AppStateType) => {
   return {dialoguesPage: state.dialoguesPage}
}

const mapDispatchToProps = (dispatch: any) => {
   return {
      sendMessage: () => {dispatch(sendMessageAC())},
      updateNewMessageBody: (body: string) => {dispatch(updateNewMessageBodyAC(body))}
   }
}

export const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)
