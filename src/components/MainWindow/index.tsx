import React from 'react';
import { FilterAndSearch, Window } from './index.styles';
import { FilterButton } from '../FilterButton';

export function MainWindow() {
  return (
    <Window>
      <FilterAndSearch>
        <FilterButton />
      </FilterAndSearch>
    </Window>
  );
}
