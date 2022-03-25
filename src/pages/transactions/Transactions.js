import React from 'react'
import { useState, useEffect } from 'react'
import TransactionsTable from './TransactionsTable';

export default function Transactions() {
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getTotalPrice = (price, vat) => {
    let priceInt = parseInt(price)
    let vatValue = (vat / 100) * parseInt(price);
    return vatValue + priceInt
  }

  useEffect(() => {
    fetchTransactions()
  }, []);


  const fetchTransactions = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:3004/transactions");
      const transactionList = await response.json();
      setTransactions(transactionList);
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <TransactionsTable getTotalPrice={ getTotalPrice } transactions={ transactions } />
  );
};