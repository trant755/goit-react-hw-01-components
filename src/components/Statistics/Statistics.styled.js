import styled from 'styled-components';

export const Tilte = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.midle};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  background-color: ${p => p.bg};
  color: ${p => p.theme.colors.statsColor};

  width: 100px;
  height: 80px;
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;
