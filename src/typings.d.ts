import 'styled-components';
import { ThemeOptions } from './const';

export type ThemeOptionsType = typeof ThemeOptions;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeOptionsType {}
}
