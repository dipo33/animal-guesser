export interface ProblemDetails {
  type?: string;
  title?: string;
  detail?: string;
  status?: number;
  instance?: string;
  code?: string;
  [key: string]: unknown;
}

export class HttpError extends Error {
  status: number;
  body?: ProblemDetails | null;
  code?: string;
  constructor(status: number, body?: ProblemDetails | null) {
    super(body?.title || body?.message || `HTTP ${status}`);
    this.status = status;
    this.body = body;
    this.code = body?.code;
  }
}

const BASE_URL = 'http://localhost:3000';

function tryParseJson(text: string): unknown {
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

export async function http<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      credentials: 'include',
      headers: { Accept: 'application/json', ...(init.headers ?? {}) },
      signal: init.signal ?? controller.signal,
    });

    const text = await res.text();
    const parsed = tryParseJson(text);

    if (!res.ok) {
      const body =
        parsed && typeof parsed === 'object'
          ? (parsed as ProblemDetails)
          : null;
      throw new HttpError(res.status, body);
    }

    return parsed as T;
  } finally {
    clearTimeout(timer);
  }
}
