import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RepoCard from './RepoCard';

const repoMock = {
  id: 1,
  name: 'Test Repo',
  description: 'This is a test repository',
};

describe('RepoCard Component', () => {
  it('renders the repo name', () => {
    render(
      <BrowserRouter>
        <RepoCard repo={repoMock} />
      </BrowserRouter>
    );
    
    const nameElement = screen.getByRole('heading', { name: /test repo/i });
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the repo description', () => {
    render(
      <BrowserRouter>
        <RepoCard repo={repoMock} />
      </BrowserRouter>
    );
    const descriptionElement = screen.getByText(/this is a test repository/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the View Details button with a link to the repo details page', () => {
    render(
      <BrowserRouter>
        <RepoCard repo={repoMock} />
      </BrowserRouter>
    );
    const viewDetailsLink = screen.getByText(/view details/i);
    expect(viewDetailsLink).toHaveAttribute('href', '/repo/1'); // Ensure correct link
  });
});
