import React, { Component } from 'react'
import * as types from '../eventType'
import Pubsub from 'pubsub-js'

class ShowAddButton extends Component {
  constructor(){
    super()
  }

  onToggleForm(){
    Pubsub.publish(types.TOGGLEFORM);
  }

  render(){
    return(
      <button id="add-question-btn" onClick={ this.onToggleForm.bind(this) } className="btn btn-success">添加问题</button>
    )
  }
}

export default ShowAddButton