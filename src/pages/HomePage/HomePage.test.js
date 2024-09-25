import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';  
import { useFetch } from '../../hooks/useFetch'; 

jest.mock('../../hooks/useFetch');

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

describe('HomePage', () => {
  beforeEach(() => {
    useFetch.mockReturnValue({
      data: mockRepos,
      loading: false,
      error: null,
    });
  });

  it('renders a list of repositories after loading', async () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText(/GitHub Repositories/i)).toBeInTheDocument());

    expect(screen.getByText(/Test Repo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the first test repo/i)).toBeInTheDocument();
    
    expect(screen.getByText(/Test Repo 2/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the second test repo/i)).toBeInTheDocument();
  });
});
