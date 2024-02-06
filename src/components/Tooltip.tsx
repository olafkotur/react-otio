import { createPopper } from '@popperjs/core';
import { motion } from 'framer-motion';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Fade } from '../animations';

const TooltipHoverContainer = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 15%);
  min-width: 100px;
  max-width: 200px;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.backgroundColor.secondary};
  filter: drop-shadow(${(props) => props.theme.dropShadow.medium});
  z-index: ${(props) => props.theme.zIndex.tooltip};
`;

export const Tooltip = ({ content, children }: { content: string; children: ReactElement }): ReactElement => {
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
    }, 300);
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
        <TooltipHoverContainer ref={tooltipRef} {...Fade({})}>
          {content}
        </TooltipHoverContainer>
      )}
    </div>
  );
};
