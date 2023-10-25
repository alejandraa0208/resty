// App.test.js

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App component', () => {
  it('fetches a joke and displays it', async () => {
    // Render the App component
    render(<App />);

    // Click the "Go" button to make the request
    userEvent.click(screen.getByText(/go/i));

    // Wait for the results to appear on the screen
    await waitFor(() => screen.getByText(/headers/i));

    // Assert that the joke is displayed
    const joke = screen.getByText(/"content": "mocked joke content"/i);
    expect(joke).toBeInTheDocument();
  });
});
