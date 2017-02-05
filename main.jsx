import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import QtReducer from './reducers/QtReducer'
import App from './containers/App'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(QtReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

store.subscribe(() => {
  console.log(store.getState())
})



