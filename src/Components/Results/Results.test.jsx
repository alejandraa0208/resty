import { render, screen } from '@testing-library/react';
import Results from './index';
import React from 'react';


test('renders Loading when loading is true', () => {
  render(<Results loading={true} />);
  const loadingText = screen.getByText('Loading...');
  expect(loadingText).toBeInTheDocument();
});

test('displays provided data', () => {
    const mockData = { name: 'test' };
    render(<Results data={mockData} />);
    
    const regex = /\{\s*"name":\s*"test"\s*\}/;
    const displayedData = screen.getByText(regex);
    
    expect(displayedData).toBeInTheDocument();
});

