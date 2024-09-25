import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RepoDetailsPage from './RepoDetailsPage';
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');

const mockRepoData = [
    {
      id: 1,
      name: 'Test Repo',
      description: 'This is a test repository',
      language: 'JavaScript',
      forks: 10,
      open_issues: 5,
      watchers: 100,
      html_url: 'https://github.com/test/repo',
    },
];

describe('RepoDetailsPage', () => {
    beforeEach(() => {
      useFetch.mockReturnValue({
        data: mockRepoData,
        loading: false,
        error: null,
      });
    });
  
    it('displays the repo details correctly', async () => {
      render(
        <MemoryRouter initialEntries={['/repo/1']}>
          <Routes>
            <Route path="/repo/:id" element={<RepoDetailsPage />} />
          </Routes>
        </MemoryRouter>
      );
      await waitFor(() => expect(screen.getByRole('heading', { name: /test repo/i })).toBeInTheDocument());
  
      expect(screen.getByText(/this is a test repository/i)).toBeInTheDocument();
      expect(screen.getByText(/javascript/i)).toBeInTheDocument();
  
      expect(screen.getByText(/forks/i)).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument(); 
  
      expect(screen.getByText(/open issues/i)).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument(); 
  
      expect(screen.getByText(/watchers/i)).toBeInTheDocument();
      expect(screen.getByText('100')).toBeInTheDocument(); 
    });
  });
