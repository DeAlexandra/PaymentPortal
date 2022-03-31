import React from 'react';
import { useState, useEffect } from 'react';
import TransactionsTable from './TransactionsTable';
import ToastNotification from '../../components/Toast alerts/ToastNotification';
import IsLoading from '../../components/IsLoading';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

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
      setIsLoading(false);
      setHasError(true);
      setMessage("fail_fetch_transactions");
      setSeverity("error");
    }
  };
  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <div>
      { !hasError
        ? <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } />
        : <ToastNotification message={ message } severity={ severity } /> }
    </div>
  );
};