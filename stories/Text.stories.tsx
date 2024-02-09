import React from 'react';
import {
  LargeText as LargeTextComponent,
  MediumText as MediumTextComponent,
  SmallText as SmallTextComponent,
  VeryLargeText as VeryLargeTextComponent,
  VerySmallText as VerySmallTextComponent,
} from '../src';

export default {
  title: 'Text',
};

export const VeryLargeText = () => <VeryLargeTextComponent>Very Large Text</VeryLargeTextComponent>;
export const LargeText = () => <LargeTextComponent>Large Text</LargeTextComponent>;
export const MediumText = () => <MediumTextComponent>Medium Text</MediumTextComponent>;
export const SmallText = () => <SmallTextComponent>Small Text</SmallTextComponent>;
export const VerySmallText = () => <VerySmallTextComponent>Very Small Text</VerySmallTextComponent>;
