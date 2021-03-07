import React, { useState } from 'react';
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
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function contact(props) {
    
  
    return(
        
        <Grid item xs={12}>
            {props.icon}
          
          {props.link}
        </Grid>
        
    )
}
