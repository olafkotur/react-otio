import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div<{ color?: string; size?: string }>`
  display: inline-block;
  width: ${(props) => `${props.size}`};
  height: ${(props) => `${props.size}`};
  :after {
    content: ' ';
    display: block;
    margin: 1px;
    border-radius: 50%;
    width: ${(props) => `${props.size}`};
    height: ${(props) => `${props.size}`};
    border: 3px solid ${(props) => props.color ?? props.theme.highlightColor.primary};
    border-color: ${(props) => props.color ?? props.theme.highlightColor.primary} transparent
      ${(props) => props.color ?? props.theme.highlightColor.primary} transparent;
    animation: ${() => animation()} 1.5s linear infinite;
  }
`;

export const Spinner = ({ color, size = '40px' }: { color?: string; size?: string }) => (
  <SpinnerContainer color={color} size={size} />
);
