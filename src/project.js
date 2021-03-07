import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
    { id:0,
      image:"/assets/SaveEnergyHouseB.jpg",
      title:"energy-title",
      content:"energy-description",
      link:"",
      category:"RENAULT",
      categorylink:"https://group.renault.com/",
      color:"warning"

    },
    { 
        id:1,
        image:"/assets/3.png",
        title:"usinage-title",
        content:"usinage-description",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { 
        id:2,
        image:"/assets/2.png",
        title:"defect-title",
        content:"defect-description",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { id:3,
        image:"/assets/4.png",
        title:"tcy-title",
        content:"tcy-description",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { id:5,
        image:"/assets/ISBN.png",
        title:"isbn-title",
        content:"isbn-description",
        link:"Github",
        href:"https://github.com/BriceFotzo/ISBN-READER.git",
        category:"ESIGELEC",
        categorylink:"https://esigelec.fr/",
        color:"danger"
  
      },
      { id:6,
        image:"/assets/beelinked.png",
        title:"Beelinked",
        content:"Concevoir et développer une application web permettant de gérer son élévage d'abeilles et visualiser les données de ses ruches(poids, température, humidité) en temps réel.",
        link:"Beelinked",
        href:"https://beelinked.eu",
        category:"ESIGELEC",
        categorylink:"https://esigelec.fr/",
        color:"danger"
  
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

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projectsList.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card.id}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <a href={card.categorylink} class={`badge badge-${card.color}`}>{card.category}</a>
                    <Typography gutterBottom variant="h6" component="h5">
                    {t(card.title)}
                    </Typography>
                    <Typography>
                    {t(card.content)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                  {card.link?
                 <a target="_blank" href={card.href}> <button  class="btn btn-primary">{card.link}</button></a>
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