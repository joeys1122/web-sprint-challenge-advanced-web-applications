import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Article from './Article';

const mockArticle = {
    id: 'aMqwd',
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00',
    summary: "summary",
    body: "",
    author: ""
}

test('renders component without errors', ()=> {
  render(<Article article={mockArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
  render(<Article article={mockArticle}/>);

  const headline = screen.getByTestId('headline');
  const author = screen.getByTestId('author');
  const summary = screen.getByTestId('summary');
  const body = screen.getByTestId('body');

  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
  render(<Article article={mockArticle}/>);

  const author = screen.getByTestId('author');

  expect(author).toBeInTheDocument();
  expect(author).toHaveTextContent('Associated Press');
});

test('executes handleDelete when the delete button is pressed', ()=> {
  const mockHandleDelete = jest.fn();

  render(<Article article={mockArticle} handleDelete={mockHandleDelete}/>);

  const deleteButton = screen.getByTestId('deleteButton');
  userEvent.click(deleteButton);

  expect(mockHandleDelete).toHaveBeenCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.