import React, { Component } from 'react'

class ShowAddButton extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <button id="add-question-btn" onClick={this.props.toggleForm.bind(this)} className="btn btn-success">添加问题</button>
    )
  }
}

export default ShowAddButton