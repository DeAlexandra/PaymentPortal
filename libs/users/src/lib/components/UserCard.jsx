import React from 'react';
import { Grid } from '@mui/material';
import { store } from '@myorg/state';
import { setDrawerOpen } from '@myorg/state';
import { useNavigate } from "react-router-dom";
import { UserCard } from '@myorg/shared/components';

export default function Card({ users }) {
    const navigate = useNavigate();
    const navigateToDetails = (userId) => {
        store.dispatch(setDrawerOpen());
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
