import React, { useEffect } from 'react';
import { BoxContainer, IsLoading } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetCallRedux } from '../../../shared/custom_hooks/index';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Table from '../../../shared/components/table/Table';
import DB_URL from '../../../shared/utils/URLs';
import { getTransactionsAction, getTransactionsFailure, getTransactionsSuccess } from '../../../shared/context/redux/actionCreators/transactions';

export default function Transactions() {
  const url = `${DB_URL}/transactions`;
  const { t } = useTranslation();
  const location = useLocation();
  const { fetchData } = useGetCallRedux(url, "fail_fetch_transactions", getTransactionsAction, getTransactionsSuccess, getTransactionsFailure);
  const transactionList = useSelector((state) => state.allTransactions.transactions);
  const loading = useSelector(state => state.allTransactions.loading);

  const tableHeads = transactionList[0] && Object.keys(transactionList[0]).filter((elem) => elem !== "date" && elem !== "category" && elem !== "products");
  const transactionsTableHeads = tableHeads && tableHeads.map((elem) => {
    if (elem === "receiver") {
      elem = "shop";
    } else if (elem === "total_price") {
      elem = "total";
    }
    return elem;
  });

  useEffect(() => {
    fetchData();
  }, [location]);

  return (loading === true)
    ? <IsLoading />
    : transactionList.length > 0
      ? <Table tableHeaderTitles={ [...transactionsTableHeads, ""] } tableEntries={ transactionList } />
      : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer>;
}
