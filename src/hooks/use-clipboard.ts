import { useCallback } from 'react';

export const useClipboardCopy = () => {
  return useCallback((value: string) => {
    navigator.clipboard.writeText(value);
  }, []);
};
