import { combineReducers } from 'redux'
import books from './book'
import user from './user'

const reducers = combineReducers({
  books,
  user
})

export default reducers
