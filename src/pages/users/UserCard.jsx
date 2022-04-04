import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function UserCard({ users }) {
    const { t } = useTranslation();
    return (
        <Grid container spacing={ 2 } sx={ { paddingLeft: "200px", paddingTop: "100px", paddingRight: "25px" } }>
            { users.map((user) =>
                <Grid key={ user.id } item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } sx={ { display: "flex" } }>
                    <Card key={ user.id } sx={ { width: "270px" } }>
                        <CardMedia
                            component="img"
                            height="100px"
                            image={ `http://localhost:3000/assets/userPics/${user.profile_picture} ` }
                            alt=""
                        /> { console.log(user.profile_picture) }
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                { user.first_name } { user.last_name }
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                { user.email }
                            </Typography>
                        </CardContent>
                        <CardActions sx={ { justifyContent: "center" } }>
                            <Button href={ `/users/${user.id}` } variant="contained" size="small">{ t("details") }</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ) }
        </ Grid >
    );
};
