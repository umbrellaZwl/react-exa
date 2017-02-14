import * as types from '../eventType'

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
}

export const changeVote = (payload) => {
  return {
    type: types.CHANGE_VOTE,
    payload
  }
}

const fetchQuestionsRequest = () => ({
  type: types.FETCH_QUESTIONS_REQUEST
})

const fetchQuestionsReceive = questions => ({
  type: types.FETCH_QUESTIONS_RECEIVE,
  questions: questions
})

export const fetchQuestions = () => dispatch => {
  dispatch(fetchQuestionsRequest())
  return fetch(`/fetchQuestions`)
    .then(response => response.json())
    .then( questions => ( dispatch( fetchQuestionsReceive( eval(questions) ) ) ) )
}

const addNewQtRequest = () => ({
  type: types.NEW_QUESTION_REQUEST
})

const addNewQtReceive = (questions) => ({
  type: types.NEW_QUESTION_RECEIVE,
  questions
})

const handleQuestions = (state,newQuestion) => {
  let questions = eval( state.qtState.questions )
  console.log( typeof questions )
  newQuestion.id = questions.reduce( (maxId,question) => Math.max(question.id,maxId), -1 ) + 1
  questions = questions.concat(newQuestion)
  return questions
}

export const addNewQt = question => (dispatch, getState) => {
  dispatch(addNewQtRequest())
  const questions = handleQuestions(getState(), question)
  var opt = {
    method: 'POST',
    headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
      'Content-Type': 'application/x-www-form-urlencoded' // default: 'application/json'
    },
    body: `questions=${JSON.stringify(questions)}`
  }
  return fetch(`/addNewQt`, opt).then(response => response.json())
    .then(() => (dispatch(addNewQtReceive(questions))))
}