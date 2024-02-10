import styled from 'styled-components';

interface Options {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
  padding?: string;
  background?: string;
  aspectRatio?: string;
}

export const Box = styled.div<{ options?: Options }>`
  width: ${({ options = {} }) => options.width ?? 'auto'};
  height: ${({ options = {} }) => options.height ?? 'auto'};
  max-width: ${({ options = {} }) => options.maxWidth ?? 'none'};
  max-height: ${({ options = {} }) => options.maxHeight ?? 'none'};
  padding: ${({ theme, options = {} }) => options.padding ?? theme.spacing.medium};
  border-radius: ${({ theme, options = {} }) => options.borderRadius ?? theme.radius.large};
  background: ${({ theme, options = {} }) => options.background ?? theme.color.background.secondary};
  aspect-ratio: ${({ options = {} }) => options.aspectRatio ?? 'auto'};
`;
