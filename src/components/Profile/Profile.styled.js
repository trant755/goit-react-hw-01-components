import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.body};
  width: 100%;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.textGrey};
  font-weight: ${p => p.theme.fontWeights.midle};
`;

export const Avatar = styled.img`
  width: 120px;
  border-radius: 50%;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StatsValue = styled.span`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserName = styled.p`
  font-weight: ${p => p.theme.fontWeights.midle};
  font-size: ${p => p.theme.fontSizes.ml};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Tag = styled.p`
  color: ${p => p.theme.colors.textGrey};
  font-weight: ${p => p.theme.fontWeights.midle};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Location = styled.p`
  color: ${p => p.theme.colors.textGrey};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
