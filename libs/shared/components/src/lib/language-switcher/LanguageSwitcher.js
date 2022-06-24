import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

function LanguageSelect() {
  const { t, i18n } = useTranslation();
  const handleChangeLang = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <FormControl sx={ { m: 1, minWidth: 80 } }>
      <InputLabel
        id="select-label">{ t("lang") }
      </InputLabel>
      <Select
        labelId="select-label"
        id="language-slect"
        onChange={ handleChangeLang }
        autoWidth
        label="Language"
        value={ localStorage.getItem("i18nextLng") }
        sx={ { color: "white" } }
      >
        <MenuItem value="en-US">{ t("english") }</MenuItem>
        <MenuItem value="ro">{ t("romanian") }</MenuItem>
      </Select>
    </FormControl>
  );
}
export { LanguageSelect };