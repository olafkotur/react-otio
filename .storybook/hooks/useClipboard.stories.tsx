import React from 'react';
import { useClipboardCopy } from '../../src';
import { ThemeDecorator } from '../main';

export default {
  title: 'Hooks/useClipboardCopy',
  decorators: [ThemeDecorator],
};

export const Default = () => {
  const clipboardCopy = useClipboardCopy();

  return (
    <div>
      <button onClick={() => clipboardCopy('Hello, World!')}>Copy</button>
    </div>
  );
};
