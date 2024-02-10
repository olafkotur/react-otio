import styled from 'styled-components';

const Text = styled.span<{ faint?: boolean; bold?: boolean; italic?: boolean; cursor?: string }>`
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }
    return props.faint ? props.theme.color.text.faint : props.theme.color.text.normal;
  }};
  cursor: ${(props) => props.cursor ?? 'inherit'};
`;

export const VeryLargeText = styled(Text)`
  font-size: ${(props) => props.theme.font.veryLarge};
`;

export const LargeText = styled(Text)`
  font-size: ${(props) => props.theme.font.large};
`;

export const MediumText = styled(Text)`
  font-size: ${(props) => props.theme.font.medium};
`;

export const SmallText = styled(Text)`
  font-size: ${(props) => props.theme.font.small};
`;

export const VerySmallText = styled(Text)`
  font-size: ${(props) => props.theme.font.verySmall};
`;
