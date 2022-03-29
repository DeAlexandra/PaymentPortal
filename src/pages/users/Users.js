import React from 'react';
import { useState, useEffect } from 'react';
import UserCard from './UserCard';
import IsLoading from '../../components/IsLoading';
import ToastNotification from '../../components/Toast alerts/ToastNotification';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

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
      setMessage("success_fetch_users");
      setSeverity("success");
    } catch (err) {
      setIsLoading(false);
      setHasError(true);
      setMessage("fail_fetch_users");
      setSeverity("error");
    }
  };
  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <div>
      { !hasError
        ? <div><ToastNotification message={ message } severity={ severity } />
          <UserCard users={ users } /> </div>
        : <ToastNotification message={ message } severity={ severity } /> }
    </div>
  );
};
