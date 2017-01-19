import React, { Component } from 'react'
import ShowAddButton from './ShowAddButton'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

import Pubsub from 'pubsub-js'
import * as types from '../eventType'
import QuestionActions from '../actions/QuestionActions'
import QuestionStore from '../stores/QuestionStore'

class QuestionApp extends Component {
  constructor(){
    super();
    
    this.state = {
      questions: QuestionStore.getAllQt()
    }

  }

  componentDidMount(){
    let _this = this
    QuestionStore.addChangeListener(this.questionsChange.bind(_this))
  }

  componentWillUnmount(){
    let _this = this
    QuestionStore.removeChangeListener(this.questionsChange.bind(_this))
  }

  questionsChange(){
    this.setState({
      questions: QuestionStore.getAllQt()
    })
  }

  render(){
    return(
      <div>
        <div className="jumbotron text-center">
            <div className="container">
              <h1>React问答</h1>
              <ShowAddButton />
            </div>
        </div>
        <div className="main container">
          <QuestionForm />
          <QuestionList 
          questions={this.state.questions}
          />

        </div>
      </div>
    )
  }
}

export default QuestionApp