import { Meta } from '@storybook/react';
import React from 'react';
import { useOnKeyPress } from '../../../src';

export default {
  title: 'Hooks/useOnKeyPress',
} as Meta;

export const Default = () => {
  useOnKeyPress({
    key: 'Enter',
    onPress: () => alert('Enter key pressed!'),
  });

  return (
    <div>
      <p>Press the "Enter" key to trigger an alert.</p>
    </div>
  );
};
