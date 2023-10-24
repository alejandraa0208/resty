import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';
import React from 'react';


test('renders URL input', () => {
    render(<Form />);
    
    const inputElement = screen.getByRole('textbox', { name: /URL/i });
    
    expect(inputElement).toBeInTheDocument();
});

test('renders REST method buttons', () => {
  render(<Form />);
  const getButton = screen.getByText('GET');
  expect(getButton).toBeInTheDocument();
});

test('captures user input', () => {
    render(<Form />);
    
    const inputElement = screen.getByRole('textbox', { name: /URL/i });
    
    fireEvent.change(inputElement, { target: { value: 'https://api.example.com' } });
    expect(inputElement.value).toBe('https://api.example.com');
});
