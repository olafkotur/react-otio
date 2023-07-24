import { useCallback } from 'react';
import { REQUEST_TIMEOUT_MS } from '../const';
import { RequestBody, RequestParams, Response } from '../typings';

interface RequestConfig {
  method: 'GET' | 'POST' | 'PATCH';
  url: string;
  params?: Record<string, RequestParams>;
  body?: Record<string, RequestBody>;
}

export const useRequest = () => {
  return useCallback(async ({ method, url, params, body }: RequestConfig): Promise<Response | null> => {
    if (!window.navigator.onLine) {
      return null;
    }

    const controller = new AbortController();
    const id = setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT_MS);

    const config = new URL(url);
    if (params != null) {
      Object.keys(params).forEach((key) => {
        const value = params[key];

        // array values must be repeated with the same key
        if (Array.isArray(value)) {
          return value.forEach((v) => {
            config.searchParams.append(key, v);
          });
        }

        config.searchParams.append(key, value as string);
      });
    }

    const result = await fetch(config, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
    clearTimeout(id);

    return result.json();
  }, []);
};
