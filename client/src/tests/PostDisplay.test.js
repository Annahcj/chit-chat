import React from 'react';

import PostDisplay from "../components/PostDisplay";
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('<PostDisplay/>', () => {
  it('should display the correct title and comment count', () => {
    expect.assertions(2);
    
    const data = {
      postId: 1,
      title: 'A post title',
      commentsCount: 5
    }
    const postComponent = (
      <Router>
        <PostDisplay postId={data.postId} title={data.title} commentsCount={data.commentsCount}/>
      </Router>
    )
    render(postComponent);

    const title = screen.getByText(data.title);
    const commentsCount = screen.getByText(data.commentsCount);
    expect(title).toBeInTheDocument();
    expect(commentsCount).toBeInTheDocument();
  })
})