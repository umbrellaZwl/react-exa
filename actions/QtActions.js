import * as types from '../eventType'

export const addNewQt = (question) => {
  return {
    type: types.NEW_QUESTION,
    question: question
  }
}

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