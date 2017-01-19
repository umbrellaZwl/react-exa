import React, { Component } from 'react'
import * as types from '../eventType'
import QuestionActions from '../actions/QuestionActions'

class ShowAddButton extends Component {
  constructor(){
    super()
  }

  onToggleForm(){
    QuestionActions.toggleForm()
  }

  render(){
    return(
      <button id="add-question-btn" onClick={ this.onToggleForm.bind(this) } className="btn btn-success">添加问题</button>
    )
  }
}

export default ShowAddButton