import React,{ Component } from 'react'
import Pubsub from 'pubsub-js'
import * as types from '../eventType'

class QuestionItem extends Component {
  constructor(){
    super()
  }

  voteUp(e){
    let newCount = (+this.props.voteCount) + 1;
    // this.props.onVote(this._reactInternalInstance._currentElement.key, newCount)
    let data = {
      key: this._reactInternalInstance._currentElement.key,
      newCount
    }
    Pubsub.publish(types.CHANGE_VOTE, Object.assign({},data))
  }

  voteDown(e){
    let newCount = (+this.props.voteCount) - 1;
    // this.props.onVote(this._reactInternalInstance._currentElement.key, newCount)
    let data = {
      key: this._reactInternalInstance._currentElement.key,
      newCount
    }
    Pubsub.publish(types.CHANGE_VOTE, Object.assign({},data))
  }

  render(){
    return(
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default" onClick={this.voteUp.bind(this)}>
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default" onClick={this.voteDown.bind(this)}>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default QuestionItem