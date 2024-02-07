import React from 'react';
import {
  CenterContainer as CenterContainerComponent,
  ColumnContainer as ColumnnContainerComponent,
  OverflowTextContainer as OverflowTextContainerComponent,
  RowBetweenContainer as RowBetweenContainerComponent,
  RowContainer as RowContainerComponent,
  SpaceBetweenContainer as SpaceBetweenContainerComponent,
} from '../../../src';

export default {
  title: 'Components/Container',
};

export const CenterContainer = () => (
  <CenterContainerComponent style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white' }}>Center</span>
  </CenterContainerComponent>
);

export const RowContainer = () => (
  <RowContainerComponent style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </RowContainerComponent>
);

export const ColumnContainer = () => (
  <ColumnnContainerComponent style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </ColumnnContainerComponent>
);

export const RowBetweenContainer = () => (
  <RowBetweenContainerComponent style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </RowBetweenContainerComponent>
);

export const SpaceBetweenContainer = () => (
  <SpaceBetweenContainerComponent style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white', background: 'green' }}>First</span>
    <span style={{ color: 'white', background: 'blue' }}>Second</span>
  </SpaceBetweenContainerComponent>
);

export const OverflowTextContainer = () => (
  <OverflowTextContainerComponent style={{ background: 'red', width: 200, height: 200 }}>
    <span style={{ color: 'white' }}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </span>
  </OverflowTextContainerComponent>
);
