import type { Preview } from '@storybook/react';
import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeOptions } from '../src/const';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 30px);
  width: calc(100vw - 30px);
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizemedium};
    color: ${({ theme }) => theme.color.text.normal};
  }
`;

const ThemeDecorator = (Story: React.FC) => (
  <ThemeProvider theme={ThemeOptions}>
    <Container>
      <GlobalStyle />
      <Story />
    </Container>
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    options: {
      showPanel: false,
    },
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#15151A' }],
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
