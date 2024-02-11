import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { animateScaleOnTap } from '../animations/animate-scale-on-tap';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  options?: {
    background?: string;
    opacity?: number;
    padding?: string;
    borderRadius?: string;
    cursor?: CSSProperties['cursor'];
  };
}

export interface IconButtonProps extends HTMLMotionProps<'button'> {
  options?: {
    size?: string;
    background?: string;
    opacity?: number;
    padding?: string;
    borderRadius?: string;
    cursor?: CSSProperties['cursor'];
  };
}

const ButtonContainer = styled(motion.button)<Pick<ButtonProps, 'options'>>`
  border: none;
  cursor: ${({ options }) => options?.cursor ?? 'pointer'};
  opacity: ${({ options }) => (options?.opacity ? options.opacity : 1)};
  padding: ${({ options, theme }) => options?.padding ?? theme.spacing.small};
  border-radius: ${({ options, theme }) => options?.borderRadius ?? theme.radius.small};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  background: ${({ options, theme }) => options?.background ?? theme.color.background.secondary};
  filter: drop-shadow(${({ theme }) => theme.shadow.medium});
`;

export const Button = ({ children, options, ...props }: ButtonProps) => {
  return (
    <ButtonContainer options={options} {...animateScaleOnTap({})} {...props}>
      {children}
    </ButtonContainer>
  );
};

const IconButtonContainer = styled(Button)<Pick<IconButtonProps, 'options'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  width: ${({ options }) => `${options?.size}` ?? 'auto'};
`;

export const IconButton = ({ children, options, ...props }: IconButtonProps) => {
  return (
    <IconButtonContainer options={options} {...animateScaleOnTap({})} {...props}>
      {children}
    </IconButtonContainer>
  );
};
