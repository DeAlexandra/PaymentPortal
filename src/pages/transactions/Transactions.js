import React from 'react';
import { useState, useEffect, useContext } from 'react';
import TransactionsTable from './TransactionsTable';
import IsLoading from '../../components/IsLoading';
import ToastContext from '../../context/ToastContext';
import BoxContainer from '../../components/BoxContainer';
import { fetchRequest } from '../fetchRequests';
import { useTranslation } from 'react-i18next';

export const getTotalPrice = (price, vat) => {
  let priceInt = parseInt(price);
  let vatValue = (vat / 100) * parseInt(price);
  return vatValue + priceInt;
};

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toastState, setToastState } = useContext(ToastContext);
  const url = "http://localhost:3004/transactions";
  const { t } = useTranslation();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setIsLoading(true);
    await fetchRequest(url, successFetchCb, errorCb, "fail_fetch_transactions", "GET");
  };
  const successFetchCb = (transactions) => {
    setTransactions(transactions);
    setIsLoading(false);
  };
  const errorCb = (errorCode) => {
    setIsLoading(false);
    setToastState({ message: errorCode, severity: "error", open: true });
  };

  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <>
      { transactions.length > 0 ? <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } /> : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer> };
    </>
  );
};