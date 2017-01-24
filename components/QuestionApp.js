import React, { Component } from 'react'
import ShowAddButton from './ShowAddButton'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

class QuestionApp extends Component {
  constructor(){
    super();
  }

  render(){
    let { questions, formDisplay, toggleForm, addNewQt, changeVote } = this.props
    return(
      <div>
        <div className="jumbotron text-center">
            <div className="container">
              <h1>React问答</h1>
              <ShowAddButton toggleForm={toggleForm} />
            </div>
        </div>
        <div className="main container">
          <QuestionForm formDisplay={formDisplay} toggleForm={toggleForm} addNewQt={addNewQt}/>
          <QuestionList 
          questions={questions}
          changeVote={changeVote}
          />

        </div>
      </div>
    )
  }
}

export default QuestionApp