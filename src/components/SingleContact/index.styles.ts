import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 8% 21% 21% 17% 15% 13%;
  align-items: center;
  gap: 10px;
  min-height: 60px;
  padding: 10px 20px;
  background-color: #ffffff;
`;

export const CheckboxAndCollapseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const CollapseImage = styled.img`
  padding: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #25213b;
`;

export const Email = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #6e6893;
  &:hover {
    opacity: 0.8;
  }
`;

export const Status = styled.div`
  position: relative;
  align-self: start;
  max-height: 19px;
  padding: 2px 5px 2px 16px;
  background-color: #e6e6f2;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #4a4aff;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 5px;
    top: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #4a4aff;
  }
`;

export const LastLogin = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #6e6893;
`;

export const PaymentDescription = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #25213b;
`;

export const Amount = styled.div`
  align-self: end;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #25213b;
`;

export const Currency = styled.div`
  align-self: end;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: #6e6893;
`;

export const ViewMoreAndBreadcrumbsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewMore = styled.div`
  margin-left: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #6e6893;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
