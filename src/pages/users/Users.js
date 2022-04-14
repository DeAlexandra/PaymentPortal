import React from 'react';
import { useState, useEffect, useContext } from 'react';
import UserCard from './UserCard';
import IsLoading from '../../components/IsLoading';
import ToastContext from '../../context/ToastContext';
import BoxContainer from '../../components/BoxContainer';
import { fetchRequest } from '../fetchRequests';
import { useTranslation } from 'react-i18next';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toastState, setToastState } = useContext(ToastContext);
  const { t } = useTranslation();
  const url = "http://localhost:3004/users";
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    await fetchRequest(url, successFetchCb, errorCb, "fail_fetch_users", "GET");
  };

  const successFetchCb = (res) => {
    setUsers(res);
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
      { users.length > 0 ? <UserCard users={ users } /> : <BoxContainer>{ t("fail_fetch_users") }</BoxContainer> }
    </>
  );
};
