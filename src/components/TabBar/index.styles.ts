import styled from '@emotion/styled';

export const BlockWithTabs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 30px;
  margin-top: 20px;
  border-bottom: 1px solid #c6c2de;
`;

export const TabList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const TabItem = styled.li`
  height: 100%;
  padding: 7px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #6e6893;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
