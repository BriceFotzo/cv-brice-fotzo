import React from 'react';
import {BrowserRouter, Route, Switch,Redirect,withRouter} from 'react-router-dom';
import Dashboard from './Dashboard'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState('en');

    function handleClick(lang) {
        console.log('test')
        // i18next.changeLanguage(lang)
        setValue(lang)

      }
    return (
      
      <BrowserRouter>
<div>

                  
       
          <Switch>
            
            <Route path="/" component={Dashboard} />
          
          </Switch>
        </div>

      </BrowserRouter>
      
    );
  }
  
  export default App
  
