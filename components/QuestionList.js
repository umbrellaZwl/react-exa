import React, { Component } from 'react'
import QuestionItem from './QuestionItem'

class QuestionList extends Component {
  constructor(){
    super()
  }

  render(){
    let onVote = this.props.onVote
    let questionsComps = this.props.questions.map(function(q){
      return <QuestionItem
              key = {q.id} 
              title = {q.title}
              description = {q.description}
              voteCount =  {q.voteCount}
              onVote = {onVote}
             />
    })
    return (
      <div id="questions" className="">
        {questionsComps}
      </div>
    )
  }
}

export default QuestionList