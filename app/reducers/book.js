import * as types from '../actions/actionTypes';
import Immutable from 'immutable'

const initialState = {
  books: []
};

const books = (state = initialState, action) => {
  const { books } = state
  const { type, data } = action

  switch (type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: Immutable.List(data)
      }
  }
  return state
}

export default books
