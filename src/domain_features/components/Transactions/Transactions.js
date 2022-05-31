import React, { useEffect } from 'react';
import Table from '../../../shared/components/table/Table';
import { BoxContainer, IsLoading } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetCall } from '../../../shared/custom_hooks/useGetCall';
import DB_URL from '../../../shared/utils/URLs';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../../shared/context/redux/actionCreators/transactions';

export default function Transactions() {
  // const url = `${DB_URL}/transactions`;
  const { t } = useTranslation();
  const trans = useSelector((state) => state.allTransactions.transactions);
  const tableHeads = trans[0] && Object.keys(trans[0]).filter((elem) => elem !== "date" && elem !== "category" && elem !== "products");
  const transactionsTableHeads = tableHeads && tableHeads.map((elem) => {
    if (elem === "receiver") {
      elem = "shop";
    } else if (elem === "total_price") {
      elem = "total";
    }
    return elem;
  });
  const loading = useSelector(state => state.allTransactions.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (loading === true)
    ? <IsLoading />
    : trans.length > 0
      ? <Table tableHeaderTitles={ [...transactionsTableHeads, ""] } tableEntries={ trans } />
      : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer>;
}
