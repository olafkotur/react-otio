import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  faint?: boolean;
  bold?: boolean;
  italic?: boolean;
  cursor?: string;
}

const Text = styled.span<Pick<TextProps, 'faint' | 'bold' | 'italic' | 'cursor'>>`
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  cursor: ${(props) => props.cursor ?? 'inherit'};
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }
    return props.faint ? props.theme.color.text.faint : props.theme.color.text.normal;
  }};
`;

export const VeryLargeText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizeveryLarge};
`;

export const LargeText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizelarge};
`;

export const MediumText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizemedium};
`;

export const SmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizesmall};
`;

export const VerySmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizeverySmall};
`;
