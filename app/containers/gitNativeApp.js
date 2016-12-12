import React, {Component} from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

export default class GitNativeApp extends Component {

  render() {
    const { books } = this.props;
    return (
      <App
        books={books}
         />
    );
  }
}
