import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import QuestionApp from './components/QuestionApp.js'
import * as QtActions from './actions/QtActions'
import QtReducer from './reducers/QtReducer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(QtReducer)

const render = () => ReactDOM.render(
  <QuestionApp 
  questions={store.getState().questions}
  formDisplay = {store.getState().formDisplay}
  toggleForm = { () => store.dispatch( QtActions.toggleForm() ) }
  addNewQt = { (newQuestion) => store.dispatch( QtActions.addNewQt(newQuestion) ) }
  changeVote = { (payload) => store.dispatch( QtActions.changeVote(payload) ) }
  />,
  document.getElementById('app')
)

render()
store.subscribe(render)



