import styled from '@emotion/styled';

export const Button = styled.button`
  position: relative;
  width: 100%;
  max-width: 88px;
  min-height: 40px;
  background-color: #ffffff;
  border: 1px solid #c6c2de;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const ButtonText = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 16px;
  line-height: 19px;
  color: #25213b;
`;
