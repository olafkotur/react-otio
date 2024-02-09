import React from 'react';
import { Header } from '../src';

export default {
  title: 'Header',
};

export const Default = () => (
  <Header style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </Header>
);
