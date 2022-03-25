import React from 'react'
import { useState, useEffect } from 'react';
import UserCard from './UserCard';

export default function Users() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:3004/users");
      const userList = await response.json();
      setUsers(userList);
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <UserCard users={ users } />
  )
}
