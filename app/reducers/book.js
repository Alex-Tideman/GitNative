import * as types from '../actions/actionTypes';

const initialState = {
  books: []
};

export const reducer = (state = initialState, action) => {
  const { books } = state
  const { type, data } = action

  switch (type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: data
      }
  }

  return state
}
