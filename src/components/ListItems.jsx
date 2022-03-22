import React from 'react'
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CachedIcon from '@mui/icons-material/Cached';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const itemList = [
    {
        text: "dashboard",
        icon: <DashboardIcon />,
        route: "dashboard"
    },
    {
        text: "transactions",
        icon: <CachedIcon />,
        route: "transactions"
    },
    {
        text: "users",
        icon: <PeopleAltIcon />,
        route: "users"
    },
    {
        text: "payouts",
        icon: <ReceiptIcon />,
        route: "payouts"
    }
]

export default function ListItems({ open }) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <List>
            { itemList.map((item, index) => {
                const { text, icon, route } = item;
                return (
                    <ListItemButton
                        key={ text }
                        onClick={ () => navigate(route) }
                        sx={ {
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5
                        } }
                    >
                        <ListItemIcon
                            sx={ {
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center"
                            } }
                        >
                            { icon }
                        </ListItemIcon>
                        <ListItemText
                            primary={ t(text) }
                            sx={ { opacity: open ? 1 : 0 } } />
                    </ListItemButton>
                )
            }) }
        </List>
    )
}
