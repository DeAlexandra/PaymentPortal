import React from 'react';
import { useState, useEffect, useContext } from 'react';
import TransactionsTable from './TransactionsTable';
import IsLoading from '../../components/IsLoading';
import ToastContext from '../../context/ToastContext';


export const getTotalPrice = (price, vat) => {
  let priceInt = parseInt(price);
  let vatValue = (vat / 100) * parseInt(price);
  return vatValue + priceInt;
};

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toastState, setToastState } = useContext(ToastContext);



  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3004/transactions");
      const transactionList = await response.json();
      setTransactions(transactionList);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setToastState({ message: "fail_fetch_transactions", severity: "error", open: true });
    }
  };
  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <>
      { transactions.length > 0 && <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } /> };
    </>
  );
};