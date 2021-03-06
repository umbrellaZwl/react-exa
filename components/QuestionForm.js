import React,{ Component } from 'react'
import * as types from '../eventType'
import Pubsub from 'pubsub-js'

class QuestionForm extends Component {
  constructor(){
    super()
    this.state = {
      formDisplay: false
    }
  }

  componentDidMount() {
    let _this = this
    Pubsub.subscribe(types.TOGGLEFORM, (event => {
      this.setState({
        formDisplay: !this.state.formDisplay
      })
    }).bind(this))
  }

  submitHandle(e){

    e.preventDefault();
    if(!this.refs.title.value && !this.refs.description.value) return;

    let newQuestion = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      voteCount: 0
    }

    this.refs.addQuestionForm.reset();
    // this.props.onNewQuestion( newQuestion )
    Pubsub.publish(types.NEW_QUESTION, newQuestion)
  }

  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  render(){
    let styleObj = {
      display: this.state.formDisplay ? 'block' : 'none'
    }
    return(
      <form ref="addQuestionForm" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.submitHandle.bind(this)}>
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
        </div>
        <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <button className="btn btn-success pull-right">确认</button>
        <a className="btn btn-default pull-right" onClick={this.toggleForm.bind(this)}>取消</a>
      </form>
    )
  }
}

export default QuestionForm