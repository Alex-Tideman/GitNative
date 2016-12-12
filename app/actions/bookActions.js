import {types} from './actionTypes';

export const actionCreators = {
  getBooks: (data) => {
    return {type: types.GET_BOOKS, data: data}
  }
}
