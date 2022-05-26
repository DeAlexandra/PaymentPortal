import React, { useEffect } from 'react';
import Table from '../../../shared/components/table/Table';
import { BoxContainer, IsLoading } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetCall } from '../../../shared/custom_hooks/useGetCall';
import DB_URL from '../../../shared/utils/URLs';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../../shared/context/redux/actionCreators';
import { useParams } from 'react-router';
import { getTransaction } from '../../../shared/context/redux/actionCreators';
export default function Transactions() {
  const url = `${DB_URL}/transactions`;
  const { t } = useTranslation();
  const { data: transactions, isLoading } = useGetCall(url, "fail_fetch_transactions");
  const tableHeads = transactions[0] && Object.keys(transactions[0]).filter((elem) => elem !== "date" && elem !== "category" && elem !== "products");
  const transactionsTableHeads = tableHeads && tableHeads.map((elem) => {
    if (elem === "receiver") {
      elem = "shop";
    } else if (elem === "total_price") {
      elem = "total";
    }
    return elem;
  });

  const trans = useSelector((state) => state.allTransactions.transactions);
  const transId = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  console.log(trans);


  const selectedTrans = useSelector((state) => state.transaction);
  console.log(selectedTrans);

  useEffect(() => {
    dispatch(getTransaction(transId));
  }, []);

  console.log(selectedTrans);

  return (isLoading === true)
    ? <IsLoading />
    : transactions.length > 0
      ? <Table tableHeaderTitles={ [...transactionsTableHeads, ""] } tableEntries={ trans } />
      : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer>;
}
