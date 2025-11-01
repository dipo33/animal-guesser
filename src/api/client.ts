import { BASE_URL } from '@/config.ts';
import type { Answer, GameMode } from '@/model/data.ts';
import i18n from 'i18next';
import createClient from 'openapi-fetch';
import type { paths } from './schema';

const api_raw = createClient<paths>({
  baseUrl: BASE_URL,
  fetch: (input: RequestInfo | URL, init?: RequestInit) => {
    return fetch(input, { ...init, credentials: 'include' });
  },
});

export const api = {
  start: (gameMode: GameMode, force: boolean) => {
    return api_raw.POST('/start', {
      params: {
        query: {
          lang: i18n.language,
        },
      },
      body: {
        game_mode: gameMode,
        force: force,
      },
    });
  },
  getQuestion: () => {
    return api_raw.GET('/question', {
      params: {
        query: {
          lang: i18n.language,
        },
      },
    });
  },
  answerQuestion: (answer: Answer) => {
    return api_raw.POST('/answer', {
      params: {
        query: {
          lang: i18n.language,
        },
      },
      body: {
        answer: answer,
      },
    });
  },
};
