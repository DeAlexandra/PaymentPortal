import React from 'react';
import Table from '../../../shared/components/table/Table';
import { BoxContainer, IsLoading } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetCall } from '../../../shared/custom_hooks/useGetCall';
import DB_URL from '../../../shared/utils/URLs';
import headerTransactionsTitles from './transactionsTableHeaderArray';

export default function Transactions() {
  const url = `${DB_URL}/transactions`;
  const { t } = useTranslation();
  const { data: transactions, isLoading } = useGetCall(url, "fail_fetch_transactions");

  return (isLoading === true)
    ? <IsLoading />
    : transactions.length > 0
      ? <Table tableHeaderTitles={ headerTransactionsTitles } tableEntries={ transactions } />
      : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer>;
}
