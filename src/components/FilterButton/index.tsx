import React from 'react';
import { Button, ButtonText, Icon } from './index.styles';
import FilterIcon from '../../assets/icons/filter-icon.svg';

export function FilterButton() {
  return (
    <Button>
      <Icon src={FilterIcon} alt="" />
      <ButtonText>Filter</ButtonText>
    </Button>
  );
}
