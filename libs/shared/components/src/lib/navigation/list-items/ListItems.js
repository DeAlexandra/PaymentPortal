import React from 'react';
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import itemList from "./navigationArray";

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
        );
      }) }
    </List>
  );
}
