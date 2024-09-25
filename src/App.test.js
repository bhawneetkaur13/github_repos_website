import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { useFetch } from './hooks/useFetch'; 

jest.mock('./hooks/useFetch');

const mockRepos = [
  {
    id: 1,
    name: 'Test Repo',
    description: 'This is a test repo',
  },
];

test('renders the home page after loading', async () => {
  useFetch.mockReturnValue({
    data: mockRepos,
    loading: false,
    error: null,
  });

  render(<App />);

  await waitFor(() => expect(screen.getByText(/GitHub Repositories/i)).toBeInTheDocument());
});
