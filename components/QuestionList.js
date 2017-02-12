import React, { Component } from 'react'
import QuestionItem from './QuestionItem'

class QuestionList extends Component {
  constructor(){
    super()
  }

  render(){
    const { changeVote, questions } = this.props
    console.log( this.props.questions )
    let questionsComps = questions.map((q) => (
      <QuestionItem key = {q.id} 
                    title = {q.title}
                    description = {q.description}
                    voteCount =  {q.voteCount}
                    changeVote = {changeVote} />
    ))

    return (
      <div id="questions" className="">
        {questionsComps}
      </div>
    )
  }
}

export default QuestionList