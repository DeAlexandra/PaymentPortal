import React from 'react';
import { useState, useEffect, useContext } from 'react';
import UserCard from './UserCard';
import IsLoading from '../../components/IsLoading';
import ToastContext from '../../context/ToastContext';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toastState, setToastState } = useContext(ToastContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3004/users");
      const userList = await response.json();
      setUsers(userList);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setToastState({ message: "fail_fetch_users", severity: "error", open: true });
    };
  };
  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <>
      { users.length > 0 && <UserCard users={ users } /> }
    </>
  );
};
