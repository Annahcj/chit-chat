import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import App from '../App.js'
import * as api from '../api.js'

jest.mock('../api.js')

beforeEach(() => jest.clearAllMocks())

describe('<App />', () => {
  it('should call api.getPostsAndComments on render', async () => {
    expect.assertions(1);

    api.getPostsAndComments.mockReturnValue(Promise.resolve({
      posts: [],
      comments: []
    }))
    
    render(
      <Router>
        <App />
      </Router>
    )
    await waitFor(() => api.getPostsAndComments.mock.calls.length > 0);
    expect(api.getPostsAndComments).toHaveBeenCalled()
  })
  it('should render the correct post titles', async () => {
    expect.assertions(2);

    api.getPostsAndComments.mockReturnValue(Promise.resolve({
      posts: [
        {
          id: 1,
          created_at: new Date('2022-04-10'),
          author: 'Alice',
          title: 'Title One',
          content: 'Content One',
        },
        {
          id: 2,
          created_at: new Date('2022-04-11'),
          author: 'Bob',
          title: 'Title Two',
          content: 'Content Two',
        }
      ],
      comments: []
    }))

    render(
      <Router>
        <App />
      </Router>
    )
    await waitFor(() => api.getPostsAndComments.mock.calls.length > 0)
    
    const posts = screen.getAllByTestId('post-display');
    expect(posts[0].textContent).toContain('Title One');
    expect(posts[1].textContent).toContain('Title Two');
  })
})