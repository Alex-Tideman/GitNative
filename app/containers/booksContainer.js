import { connect } from 'react-redux'
import { actionCreators } from '../actions/bookActions'
import Search from '../components/Search'
import Visualize from '../components/Visualize'

const mapStateToProps = (state) => ({
  return { books: state.books }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBooks: (books) => {
       dispatch(actionCreators.getBooks(books))
     }
  }
}

export default booksContainer
