import React from 'react';
import { Grid } from '@mui/material';
import store from '../../../shared/context/redux/store';
import { setOpen } from '../../../shared/context/redux/actions';
import { useNavigate } from "react-router-dom";
import UserCard from '../../../shared/components/Card';

export default function Card({ users }) {
    const navigate = useNavigate();

    const navigateToDetails = (userId) => {
        store.dispatch(setOpen);
        navigate(`/users/${userId}`);
    };

    return (
        <Grid container spacing={ 2 } sx={ { paddingLeft: "75px", paddingTop: "100px", paddingRight: "25px", minHeight: "100vh" } }>
            { users.map((user) =>
                <Grid key={ user.id } item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 } sx={ { display: "flex", justifyContent: "center" } }>
                    <UserCard cardData={ user } buttonAction={ navigateToDetails } />
                </Grid>
            ) }
        </ Grid >
    );
};
