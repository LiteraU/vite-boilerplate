import styled from '@emotion/styled';

export const TableTitlesWrapper = styled.div`
  display: grid;
  grid-template-columns:
    minmax(3%, 7%) minmax(15%, 25%) minmax(20%, 25%)
    minmax(20%, 25%) minmax(10%, 20%) minmax(5%, 15%);
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  background-color: #f4f2ff;
`;

export const ColumnTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6e6893;
`;

export const BreadcrumbButton = styled.button`
  justify-self: end;
  width: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;
