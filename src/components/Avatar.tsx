import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface AvatarProps extends HTMLMotionProps<'img'> {
  size?: string;
}

const Container = styled(motion.img)<{ size?: string }>`
  width: ${(props) => props.size ?? '40px'};
  aspect-ratio: 1 / 1;
  border-radius: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${(props) => props.size ?? '30px'};
  }
`;

export const Avatar = ({ size, ...props }: PropsWithChildren<AvatarProps>) => {
  return <Container size={size} {...props} />;
};
