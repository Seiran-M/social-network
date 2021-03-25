import {AppStateType} from '../../redux/redux-store'
import {sendMessage, updateNewMessageBody} from '../../redux/dialogues-reducer'
import {Dialogues} from './Dialogues'
import {connect} from 'react-redux'


const mapStateToProps = (state: AppStateType) => {
   return {dialoguesPage: state.dialoguesPage}
}

export const DialoguesContainer = connect(mapStateToProps, {sendMessage, updateNewMessageBody})(Dialogues)
