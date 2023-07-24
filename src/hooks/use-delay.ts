import { useCallback } from 'react';

export const useDelay = () => {
  return useCallback(({ ms }: { ms: number }) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), ms);
    });
  }, []);
};
