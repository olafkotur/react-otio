import styled from 'styled-components';

export const Spacer = styled.div<{ horizontal?: number; vertical?: number; unit?: string }>`
  padding: ${(props) =>
    `${props.vertical ?? 0}${props.unit ?? 'px'} ${props.horizontal ?? 0}${props.unit ?? 'px'} ${props.vertical ?? 0}${
      props.unit ?? 'px'
    } ${props.horizontal ?? 0}${props.unit ?? 'px'}`};
`;
