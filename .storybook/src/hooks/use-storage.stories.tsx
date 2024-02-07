import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { useClearStorage, useGetStorage, useRemoveStorage, useSetStorage } from '../../../src';

export default {
  title: 'Hooks/useStorage',
} as Meta;

export const Default = () => {
  const setStorage = useSetStorage();
  const getStorage = useGetStorage();
  const removeStorage = useRemoveStorage();
  const clearStorage = useClearStorage();

  const [key, setKey] = useState('myKey');
  const [value, setValue] = useState('Hello, World!');

  return (
    <div>
      <input value={key} onChange={(e) => setKey(e.target.value)} placeholder="Key" />
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value" />
      <button onClick={() => setStorage(key, value)}>Set Storage</button>
      <button onClick={() => alert(getStorage(key))}>Get Storage</button>
      <button onClick={() => removeStorage(key)}>Remove Storage</button>
      <button onClick={clearStorage}>Clear Storage</button>
    </div>
  );
};
