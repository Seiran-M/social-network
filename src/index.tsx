import * as serviceWorker from './serviceWorker';
import './index.scss'
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'


ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App/>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
)

serviceWorker.unregister();