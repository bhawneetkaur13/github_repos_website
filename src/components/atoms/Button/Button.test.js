import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Button Component', () => {
  // Test internal link behavior
  it('renders an internal link when "external" is false', () => {
    renderWithRouter(<Button label="Go Home" to="/" />);
    const linkElement = screen.getByText(/go home/i);
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', '/');
  });

  // Test external link behavior
  it('renders an external link when "external" is true', () => {
    render(<Button label="Go to GitHub" to="https://github.com" external />);
    const linkElement = screen.getByText(/go to github/i);
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', 'https://github.com');
    expect(linkElement).toHaveAttribute('target', '_blank');  // External links should open in new tab
  });

  // Test if button label is displayed correctly
  it('renders a button with label', () => {
    renderWithRouter(<Button label="Click Me" to="/" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
