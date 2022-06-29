import { BoxContainer, IsLoading } from '@myorg/shared/components';
import { Table } from "@myorg/shared/components";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useFetchTransactionsList } from '../API/useFetchTransactionsList';

function TransactionsList() {
  const { t } = useTranslation();
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

  useFetchTransactionsList();

  return (loading === true)
    ? <IsLoading />
    : transactionList.length > 0
      ? <Table tableHeaderTitles={ [...transactionsTableHeads, ""] } tableEntries={ transactionList } />
      : <BoxContainer>{ t("fail_fetch_transactions") }</BoxContainer>;
}
export { TransactionsList };