import React from 'react';
import { useClipboardCopy } from '../../../src';

export default {
  title: 'Hooks/useClipboard',
};

export const Default = () => {
  const clipboardCopy = useClipboardCopy();

  return (
    <div>
      <button onClick={() => clipboardCopy('Hello, World!')}>Copy</button>
    </div>
  );
};
