import styled from 'styled-components';

const Text = styled.span<{ faint?: boolean; bold?: boolean; italic?: boolean; cursor?: string }>`
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }
    return props.faint ? props.theme.color.faint : props.theme.color.normal;
  }};
  cursor: ${(props) => props.cursor ?? 'inherit'};
`;

export const VeryLargeText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.veryLarge};
`;

export const LargeText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const MediumText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const SmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const VerySmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.verySmall};
`;
