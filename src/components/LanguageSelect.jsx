import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

export default function SelectAutoWidth() {
    const { t } = useTranslation();
    const handleChangeLang = (event) => {
        i18n.changeLanguage(event.target.value)
    }
    return (
        <div>
            <FormControl sx={ { m: 1, minWidth: 80 } }>
                <InputLabel
                    id="demo-simple-select-autowidth-label">{ t("lang") }
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    onChange={ handleChangeLang }
                    autoWidth
                    label="Language"
                    defaultValue={ "en" }
                    sx={ { color: "white" } }
                >
                    <MenuItem value="en" selected>English</MenuItem>
                    <MenuItem value="ro">Română</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
