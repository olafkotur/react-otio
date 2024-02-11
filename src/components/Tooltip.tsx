import { createPopper } from '@popperjs/core';
import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { animateFade } from '../animations/animate-fade';

export interface TooltipProps extends HTMLMotionProps<'div'> {
  content: string;
}

const Container = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 15%);
  min-width: 100px;
  max-width: 200px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.color.background.tertiary};
  filter: drop-shadow(${(props) => props.theme.shadow.medium});
  z-index: ${(props) => props.theme.zIndex.tooltip};
`;

export const Tooltip = ({ children, content, ...props }: PropsWithChildren<TooltipProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    if (tooltipRef.current && childRef.current) {
      createPopper(childRef.current, tooltipRef.current, {
        placement: 'top',
      });
    }
  }, [isOpen]);

  const handleMouseOver = () => {
    timeoutId.current = setTimeout(() => {
      setIsOpen(true);
    }, 500);
  };

  const handleMouseOut = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIsOpen(false);
  };

  return (
    <div ref={childRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      {isOpen && (
        <Container ref={tooltipRef} {...animateFade({})} {...props}>
          {content}
        </Container>
      )}
    </div>
  );
};
