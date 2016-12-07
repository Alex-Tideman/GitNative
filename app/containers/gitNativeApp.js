import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import App from '../components/App';
import * as bookActions from '../actions/bookActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class GitNativeApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <App
        books={state.books}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.books
  }),
  (dispatch) => ({
    actions: bindActionCreators(bookActions, dispatch)
  })
)(GitNativeApp);
