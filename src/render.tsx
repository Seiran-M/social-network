import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

export const renderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App store={store} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

reportWebVitals();
