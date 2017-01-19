import { Dispatcher } from 'flux'
import * as types from '../eventType'
import QuestionStore from '../stores/QuestionStore'

let AppDispatcher = new Dispatcher()

AppDispatcher.register(function(action){
  switch(action.actionType) {
    case types.NEW_QUESTION:
      QuestionStore.addNewQuestion(action.question)
      QuestionStore.emitChange()
    break;
    case types.CHANGE_VOTE:
      QuestionStore.changeVote(action.question)
      QuestionStore.emitChange()
    break;
    case types.TOGGLE_FORM:
      QuestionStore.toggleFormDisplay()
      QuestionStore.emitChange()
    break;
    default:
  }
})

module.exports = AppDispatcher