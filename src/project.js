import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardHeader: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(0),
    textAlign:"center"
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const projectsList=[
    { id:8,
      date:"Oct. 2018 - Avr. 2020",
      image:"/assets/SaveEnergyHouseB.jpg",
      title:"energy-title",
      content:"energy-description",
      link:"",
      category:"RENAULT",
      categorylink:"https://group.renault.com/",
      color:"warning"

    },
    { 
        id:5,
        date:"Jui. 2020 - En cours",
        image:"/assets/3.png",
        title:"usinage-title",
        content:"usinage-description",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { 
        id:4,
        date:"Jui. 2020 - Oct. 2020",
        image:"/assets/2.png",
        title:"defect-title",
        content:"defect-description",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { id:6,
        date:"Juin. 2020 - En cours",
        image:"/assets/4.png",
        title:"tcy-title",
        content:"tcy-description",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { id:7,
        date:"Mar. 2020 - Avr. 2020",
        image:"/assets/ISBN.png",
        title:"isbn-title",
        content:"isbn-description",
        link:"Github",
        href:"https://github.com/BriceFotzo/ISBN-READER.git",
        category:"ESIGELEC",
        categorylink:"https://esigelec.fr/",
        color:"danger",
        btnColor:"github"
  
      },
      { id:3,
        date:"Oct. 2020 - En cours",
        image:"/assets/beelinked.png",
        title:"Beelinked",
        content:"beelinked-content",
        link:"Beelinked",
        href:"https://beelinked.eu",
        category:"ESIGELEC",
        categorylink:"https://esigelec.fr/",
        color:"danger",
        btnColor:"beelinked"
        
  
      },{ id:2,
        date:"Mar. 2021 - En cours",
        image:"/assets/cv_job.png",
        title:"CV & Job Matching",
        content:"cv-job-description",
        link:"Github",
        href:"https://github.com/BriceFotzo/cv-jobs-matching",
        category:"PERSONNEL",
        categorylink:"",
        color:"success",
        btnColor:"github"
  
      },
      { id:0,
        date:"Avr. 2021 - En cours",
        image:"/assets/Git Automation.png",
        title:"git-title",
        content:"git-description",
        link:"Github",
        href:"https://github.com/BriceFotzo/github_automation",
        category:"PERSONNEL",
        categorylink:"",
        color:"success",
        btnColor:"github"
  
      },
      { id:1,
        date:"4 Avr. 2021",
        image:"/assets/git_del.png",
        title:"git-delete-title",
        content:"git-delete-description",
        link:"Medium",
        href:"https://bricefotzo.medium.com/how-to-delete-many-git-repositories-at-once-fe4e9ed61751",
        category:"PERSONNEL",
        categorylink:"",
        color:"success",
        btnColor:"medium"
  
      }
]

export default function Projets(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Expériences & projets
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <Container className={classes.cardHeader} maxWidth="md">
      <h4>{t('projectHeader')}</h4>
      </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          
          <Grid container spacing={4}>
            {projectsList.sort(function(a,b){ return a.id-b.id}).map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card.id}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <span className="date" >{t(card.date)} </span><br></br>
                  <a href={card.categorylink} class={`badge badge-${card.color}`}>{card.category}</a>
                  
                    <Typography className="titleProject" gutterBottom variant="h6" component="h5">
                    {t(card.title)}
                    </Typography>
                    <Typography className="contentCard">
                    {t(card.content)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                  {card.link?
                 <a target="_blank" href={card.href}> <button  class={"btn "+card.btnColor}>{card.link}</button></a>
                  // <Button href={card.href} size="small" color="primary" className="btn btn-primary">
                  
                  // </Button>
                  :""}
                    
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    
      
    </React.Fragment>
)}