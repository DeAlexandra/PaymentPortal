import React, { useEffect } from 'react';
import UserCard from './UserCard';
import { IsLoading, BoxContainer } from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useGetCallRedux } from '../../../shared/custom_hooks/index';
import DB_URL from '../../../shared/utils/URLs';
import { getUsersAction, getUsersFailure, getUsersSuccess } from '../../../shared/context/redux/actionCreators/users';

export default function Users() {
  const url = `${DB_URL}/users`;
  const { t } = useTranslation();
  const params = useParams();
  const { fetchData } = useGetCallRedux(url, "fail_fetch_users", getUsersAction, getUsersSuccess, getUsersFailure);
  const userList = useSelector((state) => state.allUsers.users);
  const loading = useSelector(state => state.allUsers.loading);
  const hasParams = Object.keys(params).length !== 0;

  useEffect(() => {
    if (!hasParams)
      fetchData();
  }, [hasParams]);

  return (loading === true)
    ? <IsLoading />
    : userList.length > 0
      ? <UserCard users={ userList } />
      : <BoxContainer>{ t("fail_fetch_users") }</BoxContainer>;
}
