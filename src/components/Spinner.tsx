import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { animateRotate } from '../animations/animate-rotate';

export interface SpinnerProps extends HTMLMotionProps<'div'> {
  size?: string;
  width?: string;
  background?: string;
}

const SpinnerContainer = styled(motion.div)<Pick<SpinnerProps, 'size' | 'width' | 'background'>>`
  border-radius: 50%;
  border: ${(props) => props.width} solid ${(props) => props.color ?? props.theme.color.text.normal};
  border-top: ${(props) => props.width ?? '4px'} solid
    ${(props) => props.background ?? props.theme.color.background.secondary};
  border-right: ${(props) => props.width ?? '4px'} solid
    ${(props) => props.background ?? props.theme.color.background.secondary};
  width: ${(props) => props.size ?? props.theme.fontSize.medium};
  height: ${(props) => props.size ?? props.theme.fontSize.medium};
`;

export const Spinner = (props: SpinnerProps) => {
  return <SpinnerContainer {...animateRotate({})} {...props} />;
};
