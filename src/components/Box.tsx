import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { animateFade } from '../animations/animate-fade';

export interface BoxProps extends HTMLMotionProps<'div'> {
  center?: boolean;
}

const Container = styled(motion.div)<Pick<BoxProps, 'center'>>`
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.large};
  background: ${(props) => props.theme.color.background.secondary};

  ${(props) =>
    props.center &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Box = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Container {...animateFade({})} {...props}>
      {children}
    </Container>
  );
};
