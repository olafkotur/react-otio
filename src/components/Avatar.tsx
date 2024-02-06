import styled from 'styled-components';

export const Avatar = styled.img`
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 30px;
  }
`;
