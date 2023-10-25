// server/handlers.js

import { rest } from 'msw';

export const handlers = [
  // Here's an example of a GET handler
  rest.get('https://official-joke-api.appspot.com/random_joke', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: 'mocked response data'
      })
    );
  }),

  // Add other handlers as needed
];
