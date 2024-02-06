import { useCallback } from 'react';

type StorageKey = string;
type StorageValue = any;

const stringify = (value: StorageValue): string => {
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  }
  return `${value}`;
};

const parse = (value: string): StorageValue => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return `${value}`;
  }
};

export const useSetStorage = () => {
  return useCallback((key: StorageKey, data: StorageValue) => {
    const value = stringify(data);
    localStorage.setItem(key, value);
  }, []);
};

export const useGetStorage = () => {
  return useCallback((key: StorageKey) => {
    const value = localStorage.getItem(key);
    return value != null ? parse(value) : null;
  }, []);
};

export const useRemoveStorage = () => {
  return useCallback((key: StorageKey) => {
    localStorage.removeItem(key);
  }, []);
};

export const useClearStorage = () => {
  return useCallback(() => {
    localStorage.clear();
  }, []);
};
