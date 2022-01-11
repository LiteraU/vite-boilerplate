import React, { useCallback, useState } from 'react';
import { BlockWithTabs, TabItem, TabList } from './index.styles';

export function TabBar() {
  const [activeTab, setActiveTab] = useState('All');

  const handleTheAllTab = useCallback(() => {
    setActiveTab('All');
  }, []);
  const handleThePaidTab = useCallback(() => {
    setActiveTab('Paid');
  }, []);
  const handleTheUnpaidTab = useCallback(() => {
    setActiveTab('Unpaid');
  }, []);
  const handleTheOverdueTab = useCallback(() => {
    setActiveTab('Overdue');
  }, []);

  return (
    <BlockWithTabs>
      <TabList>
        <TabItem
          className={activeTab === 'All' ? 'ActiveTab' : ''}
          onClick={handleTheAllTab}
        >
          All
        </TabItem>
        <TabItem
          className={activeTab === 'Paid' ? 'ActiveTab' : ''}
          onClick={handleThePaidTab}
        >
          Paid
        </TabItem>
        <TabItem
          className={activeTab === 'Unpaid' ? 'ActiveTab' : ''}
          onClick={handleTheUnpaidTab}
        >
          Unpaid
        </TabItem>
        <TabItem
          className={activeTab === 'Overdue' ? 'ActiveTab' : ''}
          onClick={handleTheOverdueTab}
        >
          Overdue
        </TabItem>
      </TabList>
    </BlockWithTabs>
  );
}
