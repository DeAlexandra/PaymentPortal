import React from 'react';
import RightDrawer from './RightDrawer';
import UserForm from './users/UserForm';
import TransactionForm from './users/TransactionForm';

export default function DrawerDetails() {
    return (
        <>
            <RightDrawer>
                {/* <TransactionForm /> */ }
                <UserForm />
            </RightDrawer>
        </>
    );
};