import React from 'react';
import {
  Checkbox,
  ColumnTitle,
  TableTitlesWrapper,
  BreadcrumbButton,
} from './index.styles';
import BreadcrumbIcon from '../../assets/icons/breadcrumbs-icon.svg';

export function TableTitles() {
  return (
    <TableTitlesWrapper>
      <Checkbox type="checkbox" />
      <ColumnTitle>Name</ColumnTitle>
      <ColumnTitle>User status</ColumnTitle>
      <ColumnTitle>Payment status</ColumnTitle>
      <ColumnTitle>Amount</ColumnTitle>
      <BreadcrumbButton>
        <img src={BreadcrumbIcon} alt="open the transactions menu" />
      </BreadcrumbButton>
    </TableTitlesWrapper>
  );
}
