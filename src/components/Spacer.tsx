import styled from 'styled-components';

const Spacer = styled.div<{ horizontal?: number; vertical?: number }>`
  padding: ${(props) =>
    `${props.vertical ?? 0}px ${props.horizontal ?? 0}px ${props.vertical ?? 0}px ${props.horizontal ?? 0}px`};
`;

export { Spacer };
