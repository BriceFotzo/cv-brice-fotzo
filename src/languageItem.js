import React from 'react';
import './index.css'
import { useTranslation } from 'react-i18next';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
    IconFlagFR,
    IconFlagUK
  } from 'material-ui-flags';


export default function Projets(props) {
    const { t } = useTranslation();
  const [value, setValue] = React.useState(props.lang);
  
    return(
        <FormControl component="fieldset">
        <FormLabel component="legend">{t('language')}</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">

          <FormControlLabel
            value="start"
            control={<Radio
              checked={value === 'en'}
              onChange={props.handleChange}
              value="en"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'EN' }}
              label="English"
            />}
            label={<IconFlagUK />}
            labelPlacement="start"
          />
          <FormControlLabel
            value="start"
            control={
              <Radio
                checked={value === 'fr'}
                onChange={props.handleChange}
                value="fr"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'FR' }}
                size="small"
                label="Français"
              />}
            label={<IconFlagFR />}
            labelPlacement="start"
          />

        </RadioGroup>
      </FormControl>
    )
}