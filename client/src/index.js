import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Auth0Provider } from '@auth0/auth0-react'

import { reducers } from './state/reducers/index.js'

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="whai-2022-anna.au.auth0.com"
      clientId="KPeD8i6N1ofkYoAneDEs7nBQ6SfMbK4c"
      audience="https://api"
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
