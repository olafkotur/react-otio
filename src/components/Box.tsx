import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { animateFade } from '../animations/animate-fade';

export interface BoxProps extends HTMLMotionProps<'div'> {
  options?: {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    borderRadius?: string;
    padding?: string;
    background?: string;
    aspectRatio?: string;
  };
}

const Container = styled(motion.div)<Pick<BoxProps, 'options'>>`
  width: ${({ options }) => options?.width ?? 'auto'};
  height: ${({ options }) => options?.height ?? 'auto'};
  max-width: ${({ options }) => options?.maxWidth ?? 'none'};
  max-height: ${({ options }) => options?.maxHeight ?? 'none'};
  padding: ${({ theme, options }) => options?.padding ?? theme.spacing.medium};
  border-radius: ${({ theme, options }) => options?.borderRadius ?? theme.radius.large};
  background: ${({ theme, options }) => options?.background ?? theme.color.background.secondary};
  aspect-ratio: ${({ options }) => options?.aspectRatio ?? 'auto'};
`;

export const Box = ({ children, options, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Container options={options} {...animateFade({})} {...props}>
      {children}
    </Container>
  );
};
