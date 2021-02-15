import React from 'react';
import './index.css';
import {renderEntireTree} from './render';
import store from "./redux/state";

store.subscribe(renderEntireTree)

renderEntireTree();
