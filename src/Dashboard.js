import React, { useState } from 'react';
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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import CanvasJSReact from './assets/canvasjs.react';
import LanguageItem from './languageItem'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactItem from './contactItem'
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import GroupIcon from '@material-ui/icons/Group';
import AdjustSharpIcon from '@material-ui/icons/AdjustSharp';
import WordCloud from './wordcloud'

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
    backgroundColor: "#282e38"
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
  kpiText: {
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
    textAlign: "center",
    backgroundColor: "#6f7785",
    color: "white"
  },
  fixedHeight: {
    height: 260,
  },
}));


export default function Dashboard(props) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(props.lang);
  const [titleChart, setTitleChart] = useState("Nombre de projets par thème")
  const [titleX, setTitleX] = useState("Nombre de projets")
  const [titleY, setTitleY] = useState("Thèmes")

  console.log(props.match.params.lang)
  function handleChange(event) {
    console.log('test')
    i18next.changeLanguage(event.target.value)
    setValue(event.target.value)
    if (event.target.value == 'fr') {
      setTitleChart("Nombre de projets par thème")
      setTitleX("Nombre de projets")
      setTitleY("Thèmes")
    }
    else {
      setTitleChart("No of Projects per Topic")
      setTitleX("No of Projects")
      setTitleY("Topics")
    }
  }


  const options = {
    animationEnabled: true,
    responsive: true,
    responsiveAnimationDuration: 1,
    maintainAspectRatio: true,
    theme: "dark2",
    backgroundColor: "#6f7785",
    title: {
      text: titleChart
    },
    axisX: {
      title: titleX,
      reversed: true,
    },
    axisY: {
      title: titleY,
      includeZero: true,

    },
    data: [{
      type: "bar",
      dataPoints: [
        { y: 9, label: "Data Analysis" },
        { y: 6, label: "Machine Learning" },
        { y: 1, label: "Deep Learning" },
        { y: 9, label: "Data processing" },
        { y: 7, label: "Data Vizualisation" },
        { y: 9, label: "Communication" },
        { y: 3, label: "Paas" }
      ]
    }]
  }
  const datas = [{
    icon: WorkIcon,
    title: "exp-kpi",
    value: "exp-value",
    image: '/assets/renaultC.png',
    link: "Groupe Renault",
    style: "kpiText",
    url: "https://group.renault.com/",
    btnStyle: "btnStyle",
  }, {
    icon: SchoolIcon,
    title: "train-kpi",
    value: "train-value",
    image: '/assets/esigelec.png',
    link: "ESIGELEC",
    style: "kpiText",
    url: "https://www.esigelec.fr/fr/big-data-pour-la-transformation-numerique-bdtn",
    btnStyle: "btnStyle"
  }, {
    icon: Filter1Icon,
    title: "prize-kpi",
    value: "prize-value",
    image: '/assets/innojam.png',
    link: "INNOJAM",
    style: "kpiText",
    url: "http://sites.esigelec.fr/Innojam/index.php",
    btnStyle: "btnStyle"
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
        <LanguageItem handleChange={handleChange} />
        <Divider />

        <List><MainListItems /></List>


      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img class="pres-image" src="assets/img1.jpg" alt="test"></img>
                <p><h1 class="pres-title">{t("bonjour")} {t("je")} {t("suis")} Brice FOTZO</h1>
                  <h2 class="pres-content">{t("intro")} <b>{t("bd")}</b> {t("date")}.</h2>
                  <h3 class="pres-content">{t("motivation")} {t("this")} <b>{t("dash")}</b> {t("motivation2")}  </h3>
                </p>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
              <Grid container spacing={1}>
                  <h2><b>{t('about')}</b></h2>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} lg={6}>
                    <ContactItem  icon={<div class="dot"><SearchIcon/></div>} link={<div><h4>{t("becauseiam")} <b>{t("curious")}</b>,</h4><p>
                      {t('curious-text')}
                    </p></div>}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <ContactItem icon={<div class="dot"><AutorenewIcon/></div>} link={<div><h4>{t("becauseilike")} <b>{t("ml")}</b>,</h4><p>
                      {t('auto-text')}
                    </p></div>} />
                    </Grid>
                    
                  </Grid>
                  <br></br>
                  <br></br>
                  <Grid container item xs={12} spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <ContactItem  icon={<div class="dot"><GroupIcon/></div>} link={<div><h4>{t("becauseilike")} <b>{t("work in group")}</b>,</h4><p>
                      {t("group-text")}<a href="https://cs-sports.fr/toss/">TOSS</a> 2019.
                    </p></div>}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <ContactItem  icon={<div class="dot"><AdjustSharpIcon/></div>} link={<div><h4>{t("becauseilike")} {t("theplu")} <b>challenges</b>,</h4><p>
                      {t("participate in")} <a href="http://sites.esigelec.fr/Innojam/index.php">INNOJAM</a>, <a href="https://battledev.blogdumoderateur.com/">BattleDev 2019</a> {t("tennis")}
                    </p></div>}/>
                    </Grid>
                  </Grid>

                </Grid>
                </Paper>
            
            </Grid>

            {datas.map((item, key) =>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>

                  {<Deposits title={item.title} value={item.value} image={item.image} link={item.link} style={item.style} url={item.url} btnStyle={item.btnStyle} />}

                </Paper>
              </Grid>)}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits toeic={true} title="TOEIC" value={<GaugeChart id="gauge-chart1"
                  nrOfLevels={990}
                  arcsLength={[0.3, 0.5, 0.2]}
                  colors={['#EA4228', '#F5CD19', '#5BE12C']}
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
            
            
            <Grid id="experience" item xs={12} md={4} lg={12}>
              <Paper >
                
                <Projets />
              </Paper>
            </Grid>
            <Grid id="skills" item xs={12} md={4} lg={12}>
            
            <CanvasJSChart options={options}

            />
          
        </Grid>
        <Grid id="wordcloud" item xs={12} md={4} lg={12}>
        
        <WordCloud/>
      
    </Grid>
          </Grid>
          <Box  pt={4}>
          <Paper id="contact" className={classes.paper}>
            <h3><b>{t('info')}</b></h3>
          <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                    <ContactItem  icon={<LinkedInIcon/>} link={<h6><a href="https://www.linkedin.com/in/bricefotzo/">https://www.linkedin.com/in/bricefotzo/</a></h6>}/>
                    </Grid>
                    <Grid item xs={6}>
                    <ContactItem icon={<GitHubIcon/>} link={<h6><a href="https://github.com/bricefotzo">https://github.com/bricefotzo</a></h6>} />
                    </Grid>
                    
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                  <Grid item xs={6}>
                    <ContactItem  icon={<PhoneIcon/>} link={<h6>+33 06 60 88 46 39</h6>}/>
                    </Grid>
                    <Grid item xs={6}>
                    <ContactItem  icon={<MailIcon/>} link={<h6><a href="mailto:brice.fotzo@hotmail.com">brice.fotzo@hotmail.com</a></h6>}/>
                    </Grid>
                  </Grid>
                  </Paper>
          </Box>
        </Container>
      </main>
    </div>
  );
}