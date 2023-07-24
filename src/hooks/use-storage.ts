import { compressToUTF16, decompressFromUTF16 } from 'async-lz-string';
import { useCallback } from 'react';

export type StorageValue = any;
export enum StorageValueType {
  ARRAY = 'array',
  OBJECT = 'object',
  STRING = 'string',
  NUMBER = 'number',
}

const stringify = async ({ value, type }: { value: StorageValue; type: StorageValueType }): Promise<string> => {
  if (type === StorageValueType.ARRAY || type === StorageValueType.OBJECT) {
    const stringy = JSON.stringify(value);
    return await compressToUTF16(stringy);
  }
  return `${value}`;
};

const parse = async ({ value, type }: { value: StorageValue; type: StorageValueType }): Promise<StorageValue> => {
  if (type === StorageValueType.ARRAY || type === StorageValueType.OBJECT) {
    const decompressed = await decompressFromUTF16(value);
    return JSON.parse(decompressed);
  }
  return `${value}`;
};

export const useSetStorage = () => {
  return useCallback(async ({ key, value, type }: { key: string; value: StorageValue; type: StorageValueType }) => {
    const stringyValue = await stringify({ value, type });
    localStorage.setItem(key, stringyValue);
  }, []);
};

export const useGetStorage = () => {
  return useCallback(async ({ key, type }: { key: string; type: StorageValueType }) => {
    const value = localStorage.getItem(key);
    return await parse({ value, type });
  }, []);
};

export const useRemoveStorage = () => {
  return useCallback(({ key }: { key: string }) => {
    localStorage.removeItem(key);
  }, []);
};

export const useClearStorage = () => {
  return useCallback(() => {
    localStorage.clear();
  }, []);
};
