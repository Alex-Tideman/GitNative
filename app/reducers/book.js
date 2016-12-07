import * as types from '../actions/actionTypes';

const initialState = {
  books: []
};

export default function books(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_BOOKS:
      return {
        ...state,
        books: action.data
      };
    default:
      return state;
  }
}
