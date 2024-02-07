import styled from 'styled-components';

export const Avatar = styled.img<{ size?: string }>`
  width: ${(props) => props.size ?? '40px'};
  aspect-ratio: 1 / 1;
  border-radius: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: ${(props) => props.size ?? '30px'};
  }
`;
