import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { animateFade } from '../animations/animate-fade';

export interface BoxProps extends HTMLMotionProps<'div'> {}

const Container = styled(motion.div)`
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.large};
  background: ${(props) => props.theme.color.background.secondary};
`;

export const Box = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Container {...animateFade({})} {...props}>
      {children}
    </Container>
  );
};
