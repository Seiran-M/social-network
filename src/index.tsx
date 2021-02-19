import './index.css'
import {renderEntireTree} from './render'
import {store} from './redux/redux-store'

store.subscribe(renderEntireTree)

renderEntireTree()

