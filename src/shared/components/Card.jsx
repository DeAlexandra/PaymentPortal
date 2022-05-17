import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function UserCard({ cardData, buttonAction }) {
    const { t } = useTranslation();
    return (
        <Card key={ cardData.id } sx={ { width: "270px" } }>
            <CardMedia
                component="img"
                height="100px"
                image={ cardData.profile_picture }
                alt=""
            />
            <CardContent sx={ { height: "110px" } }>
                <Typography gutterBottom variant="h5" component="div" >
                    { cardData.first_name } { cardData.last_name }
                </Typography>
                <Typography variant="body2" color="text.secondary" style={ { wordWrap: "break-word" } }>
                    { cardData.email }
                </Typography>
            </CardContent >
            <CardActions sx={ { justifyContent: "center" } }>
                <Button
                    onClick={ () => { buttonAction(cardData.id); } }
                    variant="contained" size="small">{ t("details") }</Button>
            </CardActions>
        </Card>
    );
}

