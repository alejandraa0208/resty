// server/server.js

import { setupServer } from 'msw/node';
import { handlers } from './handler';

export const server = setupServer(...handlers);
