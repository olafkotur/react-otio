import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string | undefined;
  width: string;
  height: string;
}

const Container = styled.div<{ width: string; height: string }>`
  height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.medium};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Fallback = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.background.tertiary};
`;

export const Image = ({ src, width, height, ...props }: PropsWithChildren<ImageProps>) => {
  return (
    <Container width={width} height={height} {...props}>
      {src ? <Img src={src} /> : <Fallback />}
    </Container>
  );
};
