import 'react-native';
import React from 'react';
import Main from '../app/containers/main';
import App from '../app/components/App';
import Login from '../app/components/Login';
import Search from '../app/components/Search';
import Visualize from '../app/components/Visualize';
import {actionCreators} from '../app/actions/bookActions'
import books from '../app/reducers/book'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders the main app', () => {
  const tree = renderer.create(
    <Main />
  )
  expect(tree).toMatchSnapshot()
});

it('renders a login screen using Snapshots', () => {
  const tree = renderer.create(
    <Main>
      <App />
    </Main>
  )

  expect(tree).toMatchSnapshot();
});

it('renders no books on search screen using Snapshots', () => {
  const tree = renderer.create(
    <Main>
      <Search
        books={[]}
      />
    </Main>
  )
  expect(tree).toMatchSnapshot();
});

it('renders two books on search screen using Snapshots', () => {
    data = [{title: '20,000 Leagues Under the Sea'},{title: 'Foundation'}]
    const tree = renderer.create(
      <Main>
        <Search
          books={data}
        />
      </Main>
    )
    expect(tree).toMatchSnapshot();
});

it('renders data visualization with books using Snapshots', () => {
  data = [{title: '20,000 Leagues Under the Sea'},{title: 'Foundation'}]
  const tree = renderer.create(
    <Main>
      <Visualize
        books={data}
      />
    </Main>
  )
  expect(tree).toMatchSnapshot();
});



it('creates a GET_BOOKS action', () => {
  const data = [{title: '20,000 Leagues Under the Sea'},{title: 'Foundation'}]
  expect(actionCreators.getBooks(data)).toEqual(
    {
      type: 'GET_BOOKS',
      data: [{title: '20,000 Leagues Under the Sea'},{title: 'Foundation'}]
    }
  )
})

it('it returns books in books reducer', () => {
  const initialState = []
  const data = [{title: '20,000 Leagues Under the Sea'},{title: 'Foundation'}]
  expect(books(initialState, actionCreators.getBooks(data))).toEqual({
    ...initialState,
    books: data
  })
})

it('it returns books in books reducer using Snapshots', () => {
  const initialState = []
  const data = [{title: '20,000 Leagues Under the Sea'},{title: 'Foundation'}]
  expect(books(initialState, actionCreators.getBooks(data))).toMatchSnapshot();
})
