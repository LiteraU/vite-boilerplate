import styled from '@emotion/styled';
import SearchIcon from '../../assets/icons/search-icon.svg';

export const SearchInput = styled.input`
  width: 100%;
  max-width: 392px;
  height: 40px;
  margin-left: 20px;
  padding: 5px 5px 5px 40px;
  background: #f4f2ff url(${SearchIcon}) 10px no-repeat;
  border-radius: 6px;
  font-size: 14px;
  line-height: 15px;
  color: #6e6893;
  outline: none;
  border: 1px solid transparent;
  &::placeholder {
    color: #6e6893;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:focus {
    opacity: 1;
    transition: opacity 0.3s ease;
    border: 1px solid #6d5bd0;
    &::placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
`;
