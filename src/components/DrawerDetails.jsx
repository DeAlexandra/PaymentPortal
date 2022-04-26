import React from 'react';
import RightDrawer from './RightDrawer';
import UserForm from './forms/UserForm';
import TransactionForm from './forms/TransactionForm';
import { useLocation } from 'react-router-dom';

export default function DrawerDetails() {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    return (
        <>
            <RightDrawer>
                { path === "users" ? <UserForm /> : <TransactionForm /> }
            </RightDrawer>
        </>
    );
};