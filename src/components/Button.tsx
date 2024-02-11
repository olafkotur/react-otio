import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { animateScaleOnTap } from '../animations/animate-scale-on-tap';

export interface ButtonProps extends HTMLMotionProps<'button'> {}

export interface IconButtonProps extends HTMLMotionProps<'button'> {
  size?: string;
}

const ButtonContainer = styled(motion.button)`
  border: none;
  font-size: inherit;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius.small};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  background: ${(props) => props.theme.color.background.secondary};
  filter: drop-shadow(${(props) => props.theme.shadow.medium});
`;

const IconButtonContainer = styled(motion.button)<{ size?: string }>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  width: ${(props) => `${props.size}` ?? '20px'};
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius.small};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  background: ${(props) => props.theme.color.background.secondary};
  filter: drop-shadow(${(props) => props.theme.shadow.medium});
`;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...animateScaleOnTap({})} {...props}>
      {children}
    </ButtonContainer>
  );
};

export const IconButton = ({ children, size, ...props }: IconButtonProps) => {
  return (
    <IconButtonContainer size={size} {...animateScaleOnTap({})} {...props}>
      {children}
    </IconButtonContainer>
  );
};
