import React from 'react';
import { IconName } from '../src/components/Icon';
import { Info } from '../src/components/Info';

export default {
  title: 'Info',
};

export const Default = () => <Info text="This is an info message" />;

export const Icon = () => <Info icon={IconName.CIRCLE_INFO} text="This is an info message with an icon" />;
