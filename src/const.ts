export const DefaultThemeOptions = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: {
    verySmall: '10px',
    small: '14px',
    medium: '16px',
    large: '20px',
    veryLarge: '24px',
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '20px',
    veryLarge: '30px',
  },
  border: {
    normal: '0.5px solid #ABABAE',
    strong: '1px solid #ABABAE',
  },
  shadow: {
    medium: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    strong: '0px 12px 12px rgba(0, 0, 0, 0.4)',
  },
  spacing: {
    verySmall: '5px',
    small: '10px',
    medium: '20px',
    large: '24px',
    veryLarge: '30px',
  },
  zIndex: {
    select: 2500,
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
  color: {
    background: {
      primary: '#15151A',
      secondary: '#1F1F23',
      tertiary: '#292A2E',
    },
    accent: {
      primary: '#00b894', // green
      secondary: '#0984e3', // blue
      tertiary: '#e84393', // pink
      quaternary: '#fdcb6e', // yellow
      quinary: '#d63031', // red
    },
    text: {
      normal: 'rgba(236, 240, 241, 1)',
      inverted: 'rgba(50, 50, 62, 1)',
      white: 'rgba(236, 240, 241, 1)',
      black: 'rgba(50, 50, 62, 1)',
      link: 'rgba(9, 132, 227, 1)',
      faint: 'rgba(255, 255, 255, 0.4)',
      warning: 'rgba(253, 203, 110, 0.8)',
      success: 'rgba(0, 184, 148, 0.8)',
      danger: 'rgba(214, 48, 49, 0.8)',
    },
    state: {
      hover: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(0, 184, 148, 1)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
  },
};

export type DefaultThemeOptionsType = typeof DefaultThemeOptions;

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeOptionsType {}
}
