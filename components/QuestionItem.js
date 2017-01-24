import React,{ Component } from 'react'

class QuestionItem extends Component {
  constructor(){
    super()
  }

  voteUp(e){
    let _this = this
    let newCount = (+this.props.voteCount) + 1
    let data = {
      key: this._reactInternalInstance._currentElement.key,
      newCount
    }
    this.props.changeVote(data)

  }

  voteDown(e){
    let newCount = (+this.props.voteCount) - 1;
    let data = {
      key: this._reactInternalInstance._currentElement.key,
      newCount
    }
    this.props.changeVote(data)
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