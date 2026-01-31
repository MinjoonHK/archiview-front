import 'client-only';

import ky from 'ky';

import type { ApiResponse } from './common';
import { ApiError } from './error';

export const clientApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL + '/api/v1',
  timeout: 10000,
  credentials: 'include',
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 401) {
          window.location.href = '/login';
          return;
        }

        if (!response.ok) return;

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) return;

        const body = (await response.clone().json()) as ApiResponse<unknown>;
        if (!body.success) {
          throw new ApiError(body);
        }
      },
    ],
  },
});
