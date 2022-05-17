import React from 'react';
import TransactionsTable from './TransactionsTable';
import { BoxContainer, IsLoading } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetCall } from '../../../shared/custom_hooks/useGetCall';
import { getTotalPrice } from '../../../shared/utils/getTotalPrice';
import DB_URL from '../../../shared/utils/URLs';

export default function Transactions() {
  const url = `${DB_URL}/transactions`;
  const { t } = useTranslation();
  const { data: transactions, isLoading } = useGetCall(url, "fail_fetch_transactions");

  return (isLoading === true)
    ? <IsLoading />
    : transactions.length > 0 ? <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } /> : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer>;
}
