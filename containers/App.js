import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as QtActions from '../actions/QtActions'

import ShowAddButton from '../components/ShowAddButton'
import QuestionForm from '../components/QuestionForm'
import QuestionList from '../components/QuestionList'

const mapStateToProps = state => ({
  qtState: state.qtState
})

/**
如果mapDispatchToProps是一个函数，返回一个对象

const mapDispatchToProps = dispatch => ({
  addNewQt: (question)=> {
    dispatch(QtActions.addNewQt(question))
  }
})
*/

/**
如果mapDispatchToProps是对象

const mapDispatchToProps = {
  addNewQt: QtActions.addNewQt
}
*/

//使用bindActionCreators API
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({},QtActions), dispatch)
})

@connect(mapStateToProps,mapDispatchToProps/*,null,{pure: false}*/)
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      formDisplay: true
    }
  }

  static propTypes = {
    qtState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { actions } = this.props
    actions.fetchQuestions()
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  render() {
    const { qtState, actions } = this.props
    const { questions, isFetching } = qtState

    return(
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1>React问答</h1>
            <ShowAddButton toggleForm={this.toggleForm.bind(this)} />
          </div>
        </div>
        <div className="main container">
          <QuestionForm formDisplay={this.state.formDisplay} 
                        toggleForm={this.toggleForm.bind(this)}
                        addNewQt={actions.addNewQt} />
          {isFetching && <h2>Loading......</h2>}
          {!isFetching && <QuestionList questions={questions} changeVote={actions.changeVote} />}
        </div>
      </div>
    )
  }
}

/*export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)*/