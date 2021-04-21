import React from 'react'
import {compose} from 'redux'
import {connect, ConnectedProps} from 'react-redux'

import {AppStateType} from '../../redux/redux-store'
import {sendMessage} from '../../redux/dialogues-reducer'
import {Dialogues} from './Dialogues'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state: AppStateType) => ({dialoguesPage: state.dialoguesPage})

const connector = connect(mapStateToProps, {sendMessage})

export default compose<React.ComponentType>(
   connect(mapStateToProps, {sendMessage}),
   withAuthRedirect,
)(Dialogues)

// types
export type TProps = ConnectedProps<typeof connector>
