import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogues.module.css';

type DialogueItemType = {
    id: number
    name: string
}

const DialogueItem: React.FC<DialogueItemType> = (props) => {

    let path = '/dialogues/' + props.id;

    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;