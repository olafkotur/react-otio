import React from 'react';
import {
  Button as ButtonComponent,
  IconButton as IconButtonComponent,
  IconTooltipButton as IconTooltipButtonComponent,
} from '../src/components/Button';
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
  <IconButtonComponent size="100px">
    <Icon name={IconName.CODE_BRANCH} size="50px" />
  </IconButtonComponent>
);

export const IconTooltipButton = () => (
  <IconTooltipButtonComponent size="100px" content="This is a tooltip">
    <Icon name={IconName.CODE_BRANCH} size="50px" />
  </IconTooltipButtonComponent>
);
