import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 300px;
  background-color: white;
  gap: 8px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const Item = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  background-color: white;
  gap: ${p => p.theme.space[4]}px;
  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.4);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  border-radius: 4px;
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
`;
