import createClient from 'openapi-fetch';
import type { paths } from './schema';

const BASE_URL = 'http://localhost:3000';

const api_raw = createClient<paths>({
  baseUrl: BASE_URL,
});
