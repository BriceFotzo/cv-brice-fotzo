import React from 'react';
import './index.css'
import Grid from '@material-ui/core/Grid';


export default function contact(props) {
    
  
    return(
        
        <Grid item xs={12}>
            {props.icon}
          
          {props.link}
        </Grid>
        
    )
}
