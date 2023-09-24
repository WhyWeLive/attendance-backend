import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const client = new QueryClient({});
export const api = axios.create({
  baseURL: 'https://api.collegeschedule.ru:8443/',

  headers: {
    Authorization: 'Bearer 4737a113-0e16-4db5-a6f4-710a58c13189',
  },
});
