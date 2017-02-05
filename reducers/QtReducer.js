import * as types from '../eventType'

let questions = [
  {
    id:1,
    title:'产品经理与程序员矛盾的本质是什么？',
    description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
    voteCount:10
  },
  {
    id:2,
    title:'热爱编程是一种怎样的体验？',
    description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
    voteCount:8
  }
]

let _sortQuestions = (questions) => {
  questions = questions.sort(function(a,b){
    return b.voteCount - a.voteCount
  })

  return questions
}

const initialState = {
  questions
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_QUESTION:
      if (typeof action.question !== 'object') {
        throw new Error('question isnot a question object')
      }
      let newQuestion = action.question
      newQuestion.id = state.questions.reduce((maxId, question) => Math.max(question.id, maxId), -1) + 1
      let questions = state.questions.concat(newQuestion)
      return { ...state, questions: _sortQuestions(questions) }

    case types.CHANGE_VOTE:
      questions = state.questions
      var index = questions.findIndex((val, i, arr) => {
        return val.id == action.payload.key
      })

      questions[index].voteCount = action.payload.newCount
      questions = _sortQuestions(questions)
      console.log(questions)

      return { ...state, questions }

    default:
      return state
  }
}