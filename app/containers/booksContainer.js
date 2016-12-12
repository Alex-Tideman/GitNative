import { connect } from 'react-redux'
import { actionCreators } from '../actions/bookActions'

const mapStateToProps = (state) => {
  return { books: state.books }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: (books) => {
       dispatch(actionCreators.getBooks(books))
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
