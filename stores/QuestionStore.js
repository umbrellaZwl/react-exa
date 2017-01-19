import { EventEmitter } from 'events'

let QuestionStore = Object.assign({}, EventEmitter.prototype, {
  questions: [
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
  ],

  formDisplay: false,

  getAllQt: function(){
    return this.questions
  },

  addNewQuestion: function(question){
    question.id = this.questions.length + 1
    this.questions = this.questions.concat(question)
    this._sortQuestions()
  },

  changeVote: function(question){
    let index = this.questions.findIndex((val, index, arr) => {
      return val.id == question.key
    })

    this.questions[index].voteCount = question.newCount
    this._sortQuestions()
  },

  toggleFormDisplay: function(){
    this.formDisplay = !this.formDisplay
  },

  _sortQuestions: function(){
    this.questions = this.questions.sort(function(a,b){
      return b.voteCount - a.voteCount
    })
  },

  emitChange: function(){
    this.emit('change')
  },

  addChangeListener: function(cb){
    this.on('change', cb)
  },

  removeChangeListener: function(cb){
    this.removeListener('change', cb)
  }
})

module.exports = QuestionStore