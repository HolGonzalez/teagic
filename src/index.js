import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
serviceWorkerimport * as serviceWorker from './serviceWorker'

const root = document.getElementById('root')

ReactDOM.render(<App/>,root);
serviceWorker.register()