import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../reducers/book';
const store = createStore(reducer);

import GitNativeApp from './gitNativeApp';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GitNativeApp />
      </Provider>
    );
  }
}
