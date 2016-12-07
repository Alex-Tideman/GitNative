import * as types from './actionTypes';

export function getBooks(data) {
  return {
    type: types.GET_BOOKS,
    data: data
  };
}
