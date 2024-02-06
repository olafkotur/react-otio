import { useEffect } from 'react';

export const useUpdateTitle = ({ placeholder, value }: { placeholder: string; value?: string }) => {
  useEffect(() => {
    document.title = value ?? placeholder;
  }, [placeholder, value]);
};
