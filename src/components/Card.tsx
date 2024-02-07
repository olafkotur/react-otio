import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { animateFade } from '../animations/animate-fade';

const CardContainer = styled(motion.div)<{ height?: string; width?: string; center?: boolean }>`
  overflow: hidden;
  width: ${(props) => props.width ?? ''};
  height: ${(props) => props.height ?? '100%'};
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.backgroundColor.secondary};
  border-radius: ${(props) => props.theme.borderRadius.medium};

  ${(props) =>
    props.center &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const CardContentContainer = styled.div<{ scroll: boolean }>`
  height: 100%;
  overflow-y: ${(props) => (props.scroll ? 'scroll' : 'hidden')};
`;

export const Card = ({
  children,
  height,
  width,
  center,
  scroll = true,
}: {
  children: any;
  height?: string;
  width?: string;
  center?: boolean;
  scroll?: boolean;
}): ReactElement => {
  return (
    <CardContainer height={height} width={width} center={center} {...animateFade({})}>
      <CardContentContainer scroll={scroll}>{children}</CardContentContainer>
    </CardContainer>
  );
};
