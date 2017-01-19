import AppDispatcher from '../dispatcher/AppDispatcher'
import * as types from '../eventType'

let QuestionActions = {
  addNewQt: function(question){
    AppDispatcher.dispatch({
      actionType: types.NEW_QUESTION,
      question: question
    })
  },

  changeVote: function(question){
    AppDispatcher.dispatch({
      actionType: types.CHANGE_VOTE,
      question: question
    })
  },

  toggleForm: function(){
    AppDispatcher.dispatch({
      actionType: types.TOGGLE_FORM
    })
  }
}

module.exports = QuestionActions