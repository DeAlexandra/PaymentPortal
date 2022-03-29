import React from 'react';
import { useState, useEffect } from 'react';
import TransactionsTable from './TransactionsTable';
import FailTransactionFetch from '../../components/Toast alerts/FailTransactionFetch';
import IsLoading from '../../components/IsLoading';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getTotalPrice = (price, vat) => {
    let priceInt = parseInt(price);
    let vatValue = (vat / 100) * parseInt(price);
    return vatValue + priceInt;
  };

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
      console.log(err);
      setIsLoading(false);
      setHasError(true);
    }
  };
  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <div>
      { !hasError ? <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } /> : <FailTransactionFetch /> };
    </div>
  );
};