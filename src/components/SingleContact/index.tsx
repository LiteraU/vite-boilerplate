import React from 'react';
import {
  ContactWrapper,
  Checkbox,
  CollapseImage,
  TableColumn,
  Name,
  Email,
  CheckboxAndCollapseWrapper,
  Status,
  LastLogin,
  PaymentDescription,
  Amount,
  Currency,
  ViewMore,
  ViewMoreAndBreadcrumbsWrapper,
} from './index.styles';
import CollapseIcon from '../../assets/icons/collapse-icon.svg';
import { BreadcrumbButton } from '../TableTitles/index.styles';
import BreadcrumbIcon from '../../assets/icons/breadcrumbs-icon.svg';

export function SingleContact() {
  return (
    <ContactWrapper>
      <CheckboxAndCollapseWrapper>
        <Checkbox type="checkbox" />
        <CollapseImage src={CollapseIcon} alt="expand contact" />
      </CheckboxAndCollapseWrapper>
      <TableColumn>
        <Name>Justin Septimus</Name>
        <Email href="mailto:example@email.com" target="_blank">
          example@email.com
        </Email>
      </TableColumn>
      <TableColumn>
        <Status>Active</Status>
        <LastLogin>Last login: 14/APR/2020</LastLogin>
      </TableColumn>
      <TableColumn>
        <Status>Paid</Status>
        <PaymentDescription>Paid on 15/APR/2020</PaymentDescription>
      </TableColumn>
      <TableColumn>
        <Amount>$200</Amount>
        <Currency>USD</Currency>
      </TableColumn>
      <ViewMoreAndBreadcrumbsWrapper>
        <ViewMore>View More</ViewMore>
        <BreadcrumbButton>
          <img src={BreadcrumbIcon} alt="open the transactions menu" />
        </BreadcrumbButton>
      </ViewMoreAndBreadcrumbsWrapper>
    </ContactWrapper>
  );
}
