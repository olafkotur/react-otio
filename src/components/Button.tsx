import { HTMLMotionProps, motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ScaleOnTap } from '../animations';
import { Tooltip } from './Tooltip';

interface ButtonProps extends HTMLMotionProps<'div'> {
  disabled?: boolean;
  bg?: string;
  size?: number;
  width?: string;
  animation?: { depth: number };
  tooltip?: string;
}

const ButtonContainer = styled(motion.div)<{ disabled?: boolean }>`
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  filter: drop-shadow(${(props) => props.theme.dropShadow.medium});
`;

export const Button = ({ ...props }: ButtonProps): ReactElement => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' || props.disabled) return;
    props.onClick?.(event as any);
  };

  return (
    <ButtonContainer
      {...props}
      {...ScaleOnTap(props.animation ?? {})}
      role="button"
      onKeyDown={handleKeyDown}
      tabIndex={props.disabled ? -1 : undefined}
    />
  );
};

const IconButtonContainer = styled(Button)`
  display: flex;
  align-items: center;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  justify-content: center;
  background: ${(props) => props.bg ?? ''};
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius.small};
  width: ${(props) => `${props.size}px` ?? 'auto'};

  &:hover {
    background: ${(props) => props.theme.backgroundColor.selected};
  }
`;

export const IconButton = ({ ...props }: ButtonProps): ReactElement => {
  if (props.tooltip && props.disabled !== true) {
    return (
      <Tooltip content={props.tooltip}>
        <IconButtonContainer {...props}>{props.children}</IconButtonContainer>
      </Tooltip>
    );
  }
  return <IconButtonContainer {...props}>{props.children}</IconButtonContainer>;
};

const FilledIconButtonContainer = styled(IconButton)<{ bg?: string; size?: number }>`
  width: ${(props) => props.size ?? 25}px;
  height: ${(props) => props.size ?? 25}px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.bg ?? props.theme.backgroundColor.secondary};
`;

export const FilledIconButton = ({ ...props }: ButtonProps): ReactElement => {
  return <FilledIconButtonContainer {...props}>{props.children}</FilledIconButtonContainer>;
};

const LargeButtonContainer = styled(Button)<{ bg?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 80px;
  width: ${(props) => props.width ?? ''};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.bg ?? props.theme.backgroundColor.secondary};
`;

export const LargeButton = ({ ...props }: ButtonProps): ReactElement => {
  return <LargeButtonContainer {...props}>{props.children}</LargeButtonContainer>;
};