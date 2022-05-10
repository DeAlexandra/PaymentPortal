import React from 'react';
import TransactionsTable from './TransactionsTable';
import { BoxContainer, IsLoading } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetFetchCall } from '../../../shared/custom_hooks/useFetchCall';
import { getTotalPrice } from '../../../shared/utils/getTotalPrice';

export default function Transactions() {
  const url = "http://localhost:3004/transactions";
  const { t } = useTranslation();
  const { data: transactions, isLoading } = useGetFetchCall(url, "fail_fetch_transactions");

  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <>
      { transactions.length > 0 ? <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } /> : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer> };
    </>
  );
}
