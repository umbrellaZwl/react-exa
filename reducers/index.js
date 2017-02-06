import { combineReducers } from 'redux'
import qtReducer from './QtReducer'

const rootReducer = combineReducers({
  qtState: qtReducer
})

export default rootReducer