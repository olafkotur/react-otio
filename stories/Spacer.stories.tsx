import React from 'react';
import { Spacer } from '../src';

export default {
  title: 'Spacer',
};

export const Vertical = () => (
  <div style={{ background: 'red', width: 200, height: 200, display: 'flex', flexDirection: 'column' }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <Spacer vertical={50} />
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </div>
);

export const Horiztonal = () => (
  <div style={{ background: 'red', width: 200, height: 200, display: 'flex', flexDirection: 'row' }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <Spacer horizontal={50} />
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </div>
);
