import React from 'react';
import UserCard from './UserCard';
import { IsLoading, BoxContainer } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetFetchCall } from '../../../shared/custom_hooks/useFetchCall';

export default function Users() {
  const url = "http://localhost:3004/users";
  const { t } = useTranslation();
  const { data: users, isLoading } = useGetFetchCall(url, "fail_fetch_users");

  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <>
      { users.length > 0 ? <UserCard users={ users } /> : <BoxContainer>{ t("fail_fetch_users") }</BoxContainer> }
    </>
  );
};
