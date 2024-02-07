import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { useUpdateTitle } from '../../../src';

export default {
  title: 'Hooks/useUpdateTitle',
} as Meta;

export const Default = () => {
  const [value, setValue] = useState('');

  useUpdateTitle({ placeholder: 'Default Title', value });

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to update document title"
      />
    </div>
  );
};
