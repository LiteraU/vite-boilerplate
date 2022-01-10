import React from 'react';
import { Container } from './index.styles';
import { PageTitle } from '../components/PageTitle';
import { TabBar } from '../components/TabBar';
import { MainWindow } from '../components/MainWindow';

export function DashboardPage() {
  return (
    <Container>
      <PageTitle />
      <TabBar />
      <MainWindow />
    </Container>
  );
}
