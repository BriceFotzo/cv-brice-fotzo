import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from './listItems';
import Deposits from './Deposits';
import Projets from './project';
import './index.css'
import GaugeChart from 'react-gauge-chart'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Filter1Icon from '@material-ui/icons/Filter1';
import reportWebVitals from './reportWebVitals';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Lang from "./Lang";
import CanvasJSReact from './assets/canvasjs.react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {
  IconFlagFR,
  IconFlagUK
} from 'material-ui-flags';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"#282e38"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  kpiText:{
    width: "auto",
    height: "50px",
  margin: "20px auto",
    
  },
  
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    textAlign:"center",
    backgroundColor:"#6f7785",
    color:"white"
  },
  fixedHeight: {
    height: 260,
  },
}));


export default function Dashboard(props) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(props.lang);
  const [titleChart,setTitleChart]=useState("Nombre de projets par thème")
  const [titleX,setTitleX]=useState("Nombre de projets")
  const [titleY,setTitleY]=useState("Thèmes")
  
  console.log(props.match.params.lang)
  function handleChange(event) {
    console.log('test')
    i18next.changeLanguage(event.target.value)
    setValue(event.target.value)
    if (event.target.value=='fr')
    {
      setTitleChart("Nombre de projets par thème")
      setTitleX("Nombre de projets")
      setTitleY("Thèmes")
    }
    else{
      setTitleChart("No of Projects per Topic")
      setTitleX("No of Projects")
      setTitleY("Topics")
    }
  }

function updateLang(){
  if (props.lang=='fr')
  {
    setTitleChart("Nombre de projets par thème")
    setTitleX("Nombre de projets")
    setTitleY("Thèmes")
  }
  else{
    setTitleChart("No of Projects per Topic")
    setTitleX("No of Projects")
    setTitleY("Topics")
  }
}
function handleClick(lang) {
  console.log('test')
  i18next.changeLanguage(lang)
  setValue(lang)
  if (lang=='fr')
  {
    setTitleChart("Nombre de projets par thème")
    setTitleX("Nombre de projets")
    setTitleY("Thèmes")
  }
  else{
    setTitleChart("No of Projects per Topic")
    setTitleX("No of Projects")
    setTitleY("Topics")
  }
}
  const options = {
    animationEnabled: true,
    responsive: true,
    responsiveAnimationDuration:1,
    maintainAspectRatio:true,
    theme: "dark2",
    backgroundColor: "#6f7785",
    title:{
      text: titleChart
    },
    axisX: {
      title: titleX ,
      reversed: true,
    },
    axisY: {
      title:titleY,
      includeZero: true,
      
    },
    data: [{
      type: "bar",
      dataPoints: [
        { y:  9, label: "Data Analysis" },
        { y:  8, label: "Machine Learning" },
        { y:  3, label: "Deep Learning" },
        { y:  10, label: "Data processing" },
        { y:  6, label: "Data Vizualisation" },
        { y:  9, label: "Communication" },
        { y:  3, label: "Paas" }
      ]
    }]
      }
  const datas=[{
    icon:WorkIcon,
    title:"Expérience",
    value:"3 ans",
    image:'/assets/renaultC.png',
    link:"Groupe Renault",
    style:"kpiText",
    url: "https://group.renault.com/",
    btnStyle:"btnStyle",
  },{
    icon:SchoolIcon,
    title:"Formation",
    value:"5 projets",
    image:'/assets/esigelec.png',
    link:"ESIGELEC",
    style:"kpiText",
    url:"https://www.esigelec.fr/fr/big-data-pour-la-transformation-numerique-bdtn",
    btnStyle:"btnStyle"
  },{
    icon:Filter1Icon,
    title:"Prix ",
    value:"1ère place",
    image:'/assets/innojam.png',
    link:"INNOJAM",
    style:"kpiText",
    url:"http://sites.esigelec.fr/Innojam/index.php",
    btnStyle:"btnStyle"
  },
 ]
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            CV Brice FOTZO
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        
        
      
      <FormControl component="fieldset">
      <FormLabel component="legend">{t('language')}</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        
        <FormControlLabel
          value="start"
          control={<Radio
            checked={value === 'en'}
            onChange={handleChange}
            value="en"
            color="default"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'EN' }}
            label="English"
          />}
          label={<IconFlagUK/>}
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={
            <Radio
              checked={value === 'fr'}
              onChange={handleChange}
              value="fr"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'FR' }}
              size="small"
              label="Français"
            />}
          label={<IconFlagFR/>}
          labelPlacement="start"
        />
        
      </RadioGroup>
    </FormControl>
        <Divider />

        <List><MainListItems/></List>
       
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

      
          <Grid item xs={12} md={4} lg={12}>
              <Paper >
              <Grid item xs={12} md={4} lg={12}></Grid>
              <div class="pres-card">
              <div class="pres-header"> 
              
              <Grid item xs={12} md={4} lg={12}>
              <img class="pres-image" src="assets/img1.jpg" alt="test"></img>
              <p><h1 class="pres-title">{t("bonjour")} {t("je")} {t("suis")} Brice FOTZO</h1>
                  <h2 class="pres-content">{t("intro")} <b>{t("bd")}</b> {t("date")}.</h2>
                  <h3 class="pres-content">{t("this")} <b>{t("dash")}</b> {t("motivation2")}  </h3>
                  </p>
              </Grid>
                   </div> 
                
                
                
              </div>
               
              </Paper>
            </Grid>
            
            {/* Recent Deposits */}
            {datas.map((item,key) => 
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
                {<Deposits  title={item.title} value={item.value} image={item.image} link={item.link} style={item.style} url={item.url} btnStyle={item.btnStyle} />}
                
              </Paper>
            </Grid>)}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <Deposits title="TOEIC" value={<GaugeChart id="gauge-chart1" 
                   nrOfLevels={990}
  arcsLength={[0.3, 0.5, 0.2]}
  colors={['#EA4228', '#F5CD19','#5BE12C' ]}
  percent={0.90}
  arcPadding={0.0}
  animate={false}
  needleColor="#345243"
  arcWidth={0.2}
  textColor="#FFFFFF"
  cornerRadius={0}
  formatTextValue={value => 895}
              />} image={'/assets/ets.png'} style='imageKPI' btnStyle="linkC" />
              
                
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4} lg={12}>
              <Paper >
              <CanvasJSChart options = {options}
				
			/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={12}>
              <Paper >
                <Projets />
              </Paper>
            </Grid>
            
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}