import React from 'react';
import { SearchInput } from './index.styles';

export function SearchField() {
  return (
    <SearchInput
      type="search"
      placeholder="Search Users by Name, Email or Date"
    />
  );
}
