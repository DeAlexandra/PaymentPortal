import UserCard from "./UserCard";
import { IsLoading, BoxContainer } from "@myorg/shared/components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useFetchUsersList } from "../API/useFetchUsersList";

const UsersList = () => {
  const { t } = useTranslation();
  const userList = useSelector((state) => state.allUsers.users);
  const loading = useSelector((state) => state.allUsers.loading);
  useFetchUsersList();

  return loading === true ? (
    <IsLoading />
  ) : userList.length > 0 ? (
    <UserCard users={ userList } />
  ) : (
    <BoxContainer>{ t("fail_fetch_users") }</BoxContainer>
  );
};

export { UsersList };
