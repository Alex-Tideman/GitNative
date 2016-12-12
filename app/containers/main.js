import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../reducers/book';
const store = createStore(reducer);

import App from '../components/App';

export default class Main extends Component {
  render() {
    const { books } = this.props;

    return (
      <Provider store={store}>
        <App
          books={books}
           />
      </Provider>
    );
  }
}
