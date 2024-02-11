import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  type: 'vertical' | 'horizontal';
  value: number;
}

export const Spacer = styled.div<Pick<SpacerProps, 'type' | 'value'>>`
  margin: ${(props) => {
    const halvedValue = props.value / 2;
    return props.type === 'vertical' ? `${halvedValue}px 0` : `0 ${halvedValue}px`;
  }};
`;
