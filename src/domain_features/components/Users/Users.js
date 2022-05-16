import React from 'react';
import UserCard from './UserCard';
import { IsLoading, BoxContainer } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useGetCall } from '../../../shared/custom_hooks/useGetCall';
import DB_URL from '../../../shared/utils/URLs';

export default function Users() {
  const url = `${DB_URL}/users`;
  const { t } = useTranslation();
  const { data: users, isLoading } = useGetCall(url, "fail_fetch_users");

  return (isLoading === true)
    ? <IsLoading />
    : users.length > 0 ? <UserCard users={ users } /> : <BoxContainer>{ t("fail_fetch_users") }</BoxContainer>;
}
