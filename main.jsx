import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import QtReducer from './reducers'
import App from './containers/App'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const middleware = [thunk]
if(process.env.NODE_ENV !== 'productions'){
  middleware.push(createLogger())
}

const store = createStore(
  QtReducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

/*store.subscribe(() => {
  console.log(store.getState())
})*/



