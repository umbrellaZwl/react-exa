import React from 'react'
import ReactDOM from 'react-dom'
import QuestionApp from './components/QuestionApp.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Pubsub from 'pubsub-js'

ReactDOM.render(<QuestionApp />,document.getElementById('app'))

