import React from 'react';
import {
  Button,
  FilledIconButton as FilledIconButtonComponent,
  Icon,
  IconButton as IconButtonComponent,
  IconName,
  LargeButton as LargeButtonComponent,
} from '../src';

export default {
  title: 'Button',
};

const onClick = () => window.alert('Button clicked');

export const Default = () => (
  <Button onClick={onClick}>
    <span style={{ color: 'white' }}>Click me!</span>
  </Button>
);

export const IconButton = () => (
  <IconButtonComponent onClick={onClick}>
    <Icon name={IconName.CIRCLE_INFO} size={50} />
  </IconButtonComponent>
);

export const IconButtonTooltip = () => (
  <IconButtonComponent onClick={onClick} tooltip="Bit more info">
    <Icon name={IconName.CIRCLE_INFO} size={50} />
  </IconButtonComponent>
);

export const FilledIconButton = () => (
  <FilledIconButtonComponent onClick={onClick} bg="red">
    <Icon name={IconName.CIRCLE_INFO} size={50} />
  </FilledIconButtonComponent>
);

export const LargeButton = () => (
  <LargeButtonComponent onClick={onClick} bg="red">
    <span style={{ color: 'white' }}>Click me!</span>
  </LargeButtonComponent>
);
