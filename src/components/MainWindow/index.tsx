import React from 'react';
import { FilterAndSearch, Window } from './index.styles';
import { FilterButton } from '../FilterButton';
import { SearchField } from '../SearchField';
import { TableTitles } from '../TableTitles';

export function MainWindow() {
  return (
    <Window>
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
      </FilterAndSearch>
      <TableTitles />
    </Window>
  );
}
