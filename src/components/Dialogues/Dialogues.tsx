import React from 'react';
import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialoguesItem';
import Message from './Messages/Messages';

import {DialoguesPageType} from '../../redux/state';

type PropsType = {
    dialogPage: DialoguesPageType
}


const Dialogues: React.FC<PropsType> = (props) => {

    let dialoguesElements = props.dialogPage.dialogues.map(d => <DialogueItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    // UI - Components
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogues