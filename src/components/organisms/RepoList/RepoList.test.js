import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import RepoList from './RepoList'; 

const mockRepos = [
  {
    id: 1,
    name: 'Test Repo 1',
    description: 'This is the first test repo',
  },
  {
    id: 2,
    name: 'Test Repo 2',
    description: 'This is the second test repo',
  },
];

describe('RepoList Component', () => {
  it('renders a list of repositories', () => {
    render(
      <BrowserRouter>
        <RepoList repos={mockRepos} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Test Repo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the first test repo/i)).toBeInTheDocument();

    expect(screen.getByText(/Test Repo 2/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the second test repo/i)).toBeInTheDocument();
  });

  it('renders a "View Details" button for each repo', () => {
    render(
      <BrowserRouter>
        <RepoList repos={mockRepos} />
      </BrowserRouter>
    );

    const viewDetailsButtons = screen.getAllByText(/View Details/i);
    expect(viewDetailsButtons.length).toBe(mockRepos.length); 

    expect(viewDetailsButtons[0]).toHaveAttribute('href', '/repo/1');
    expect(viewDetailsButtons[1]).toHaveAttribute('href', '/repo/2');
  });
});
