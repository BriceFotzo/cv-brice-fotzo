import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useTranslation } from 'react-i18next';
function preventDefault(event) {
  event.preventDefault();
  
}
function openLink(url){
  window.open(url);
}
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Title class="kpiTitle">{t(props.title)}</Title>
      <Typography class="kpiValue" component="p" variant="h4">
        {props.toeic?
        props.value:
        t(props.value)
        }
      
      </Typography>
      
      
      <div>
        <Link  href={props.url} onClick={(event)=>{event.preventDefault();
        window.open(props.url)}} >
         <img class={props.style} src={props.image}/>
        </Link>
      </div>
    </React.Fragment>
  );
}
