import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface AvatarProps extends HTMLMotionProps<'img'> {
  options?: {
    size?: string;
  };
}

const Container = styled(motion.img)<Pick<AvatarProps, 'options'>>`
  width: ${({ options }) => options?.size ?? '40px'};
  aspect-ratio: 1 / 1;
  border-radius: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: ${({ options }) => options?.size ?? '30px'};
  }
`;

export const Avatar = ({ options, ...props }: PropsWithChildren<AvatarProps>) => {
  return <Container options={options} {...props} />;
};
