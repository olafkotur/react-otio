import React from 'react';
import { Tooltip } from '../src/components/Tooltip';

export default {
  title: 'Tooltip',
};

export const Default = () => (
  <Tooltip content="This is a tooltip">
    <span style={{ color: 'white' }}>Hover me</span>
  </Tooltip>
);
