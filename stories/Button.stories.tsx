import React from 'react';
import { Button as ButtonComponent, IconButton as IconButtonComponent } from '../src/components/Button';
import { Icon, IconName } from '../src/components/Icon';

export default {
  title: 'Button',
};

const onClick = () => console.log('Button clicked');

export const Button = () => (
  <ButtonComponent onClick={onClick}>
    <span style={{ color: 'white' }}>Click me!</span>
  </ButtonComponent>
);

export const IconButton = () => (
  <IconButtonComponent options={{ size: '100px' }}>
    <Icon name={IconName.ANCHOR} color="white" size={60} />
  </IconButtonComponent>
);
