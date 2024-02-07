import React from 'react';
import { Card } from '../../../src';

export default {
  title: 'Components/Card',
};

export const Default = () => (
  <Card width="200px" height="200px">
    <span style={{ color: 'white' }}>Some card content</span>
  </Card>
);
