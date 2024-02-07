import type { Preview } from '@storybook/react';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Theme = {
  font: 'Inter',
  fontSize: {
    verySmall: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    veryLarge: '20px',
  },
  borderRadius: {
    small: '3px',
    medium: '5px',
    large: '8px',
    veryLarge: '12px',
  },
  border: {
    normal: '0.5px solid #ABABAE',
    strong: '1px solid #ABABAE',
  },
  spacing: {
    verySmall: '3px',
    small: '5px',
    medium: '10px',
    large: '15px',
    veryLarge: '20px',
  },
  color: {
    faint: 'rgba(255, 255, 255, 0.6)',
    normal: 'rgba(255, 255, 255, 1)',
    danger: 'rgba(227, 66, 66, 0.8)',
    inverted: '#32323E',
    white: '#ecf0f1',
    black: '#32323E',
  },
  backgroundColor: {
    primary: '#13121B',
    secondary: '#20202B',
    tertiary: '#ecf0f1',
    faint: 'rgba(255, 255, 255, 0.2)',
    selected: 'rgba(255, 255, 255, 0.2)',
    backdrop: 'rgba(0, 0, 0, 0.8)',
    transparent: 'transparent',
  },
  highlightColor: {
    primary: '#29804C', // green
    secondary: '#495FD1', // blue
    tertiary: '#DBAD39', // yellow
    quaternary: '#E34242', // red
  },
  dropShadow: {
    medium: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    strong: '0px 12px 12px rgba(0, 0, 0, 0.4)',
  },
  zIndex: {
    backdrop: 5000,
    panel: 7000,
    modal: 7500,
    tooltip: 10000,
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 30px);
  width: calc(100vw - 30px);
`;

const ThemeDecorator = (Story) => (
  <ThemeProvider theme={Theme}>
    <Container>
      <Story />
    </Container>
  </ThemeProvider>
);

type ThemeType = typeof Theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    options: {
      showPanel: false,
    },
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#13121A' }],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
