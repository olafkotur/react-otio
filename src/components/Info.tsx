import { HTMLMotionProps } from 'framer-motion';
import React, { ReactElement } from 'react';
import { styled } from 'styled-components';
import { Box } from './Box';
import { Icon, IconName } from './Icon';
import { Spacer } from './Spacer';
import { SmallText } from './Text';

export interface InfoProps extends HTMLMotionProps<'div'> {
  text: string;
  icon?: IconName;
  color?: string;
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 ${(props) => props.theme.spacing.verySmall};
  background: ${(props) => props.theme.color.background.tertiary};
  border-radius: ${(props) => props.theme.borderRadius.small};
`;

export const Info = ({ text, icon, color, ...props }: InfoProps): ReactElement => {
  return (
    <Container {...props}>
      {icon && (
        <>
          <Icon name={icon} color={color} />
          <Spacer type="horizontal" value={5} />
        </>
      )}
      <SmallText faint>{text}</SmallText>
    </Container>
  );
};
