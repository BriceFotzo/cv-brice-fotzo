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
      title:"Amélioration de la gestion des achats d’énergie",
      content:"Prédire les consommations d’énergie des usines avec plus de précision pour  accompagner les commandes d’énergie",
      link:"",
      category:"RENAULT",
      categorylink:"https://group.renault.com/",
      color:"warning"

    },
    { 
        id:1,
        image:"/assets/3.png",
        title:"Suivi des outils d’usinage",
        content:"Traiter les données d’usinage et créer des Dashboards permettant de visualiser leurs durées de vie afin de les changer au bon moment",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { 
        id:2,
        image:"/assets/2.png",
        title:"Réduction des taux de défauts de fonderie",
        content:"Identification des causes et prédiction des défauts pour la prévention de ces derniers",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { id:3,
        image:"/assets/4.png",
        title:"Optimisation des temps de production et d’assemblage",
        content:"Calculer et restituer les temps de cycles de procédés via un Dashboard. Ce dernier permet d’identifier les opérations lentes/pénalisantes pour une optimisation des procédés",
        link:"",
        category:"RENAULT",
        categorylink:"https://group.renault.com/",
        color:"warning"
      },
      { id:5,
        image:"/assets/ISBN.png",
        title:"ISBN READER",
        content:"Prédire le numéro d'identifiant unique (ISBN) d'un livre grâce à une image de sa 4ème de couverture.",
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

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Mes projets
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        {/* <div className={classes.heroContent}>
          <Container maxWidth="sm">
           
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Cliquez sur une catégorie pour n'afficher que les projets qui vous intéressent.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Professionnels
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Personnels
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Académiques
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div> */}
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
                    {card.title}
                    </Typography>
                    <Typography>
                    {card.content}
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