import * as types from '../eventType'

let questions = []

let _sortQuestions = (questions) => {
  questions = questions.sort(function(a,b){
    return b.voteCount - a.voteCount
  })

  return questions
}

const initialState = {
  questions,
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_QUESTION_REQUEST:
      return { ...state, isFetching: true }

    case types.NEW_QUESTION_RECEIVE:
      return { ...state, questions: _sortQuestions(action.questions), isFetching: false }

    case types.CHANGE_VOTE:
      questions = state.questions
      var index = questions.findIndex((val, i, arr) => {
        return val.id == action.payload.key
      })

      questions[index].voteCount = action.payload.newCount
      questions = _sortQuestions(questions)
      // console.log(questions)

      return { ...state, questions }

    case types.FETCH_QUESTIONS_REQUEST:
      return { ...state, isFetching: true }

    case types.FETCH_QUESTIONS_RECEIVE:
      console.log(action)
      return { ...state, isFetching: false, questions: _sortQuestions(action.questions) }

    default:
      return state
  }
}