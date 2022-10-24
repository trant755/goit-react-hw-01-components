import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid;
`;

export const Th = styled.th`
  width: 250px;
  padding: 15px 0;
  background-color: #07bcd5;
  color: white;
  &:nth-child(2n) {
    border-style: solid;
    border-width: 0 1px 0 1px;
    border-color: ${p => p.theme.colors.white};
  }
`;

export const Tr = styled.tr`
  &:nth-child(2n + 1) {
    background-color: white;
  }
`;

export const Td = styled.td`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.textGrey};
  width: 200px;
  padding: 15px 0;
  &:nth-child(2n) {
    border-style: solid;
    border-width: 0 1px 0 1px;
    border-color: ${p => p.theme.colors.darkGrey};
  }
`;
