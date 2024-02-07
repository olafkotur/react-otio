import { Meta } from '@storybook/react';
import React, { useRef } from 'react';
import { useOnClickout } from '../../../src';

export default {
  title: 'Hooks/useOnClickout',
} as Meta;

export const Default = () => {
  const ref = useRef(null);
  useOnClickout([ref], () => alert('Clicked outside!'));

  return (
    <div style={{ width: '100%', height: '100vh', background: 'lightgray' }}>
      <div ref={ref} style={{ width: 200, height: 200, background: 'white', margin: 'auto' }}>
        Click outside this box
      </div>
    </div>
  );
};
