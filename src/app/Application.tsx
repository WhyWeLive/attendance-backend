import { QueryClientProvider } from '@tanstack/react-query';

import './application.css';

import { client } from './client/query.client';
import { Router } from './router/router.component';

export const Application = () => (
  <QueryClientProvider client={client}>
    <Router />
  </QueryClientProvider>
);
