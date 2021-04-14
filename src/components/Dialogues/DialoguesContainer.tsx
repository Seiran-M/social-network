import {AppStateType} from '../../redux/redux-store'
import {sendMessage} from '../../redux/dialogues-reducer'
import {connect, ConnectedProps} from 'react-redux'
import React from 'react'
import {Dialogues} from './Dialogues'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state: AppStateType) => ({dialoguesPage: state.dialoguesPage})

const connector = connect(mapStateToProps, {sendMessage})

export default compose<React.ComponentType>(
   connect(mapStateToProps, {sendMessage}),
   // withAuthRedirect,
)(Dialogues)

export type TProps = ConnectedProps<typeof connector>
