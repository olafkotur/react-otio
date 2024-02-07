import styled from 'styled-components';

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpaceBetweenContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`;

export const OverflowTextContainer = styled.div<{ width?: string }>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.width ?? '100%'};
`;
