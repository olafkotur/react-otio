import 'styled-components';
import { DefaultThemeOptions } from './const';

export type DefaultThemeOptionsType = typeof DefaultThemeOptions;

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeOptionsType {}
}
