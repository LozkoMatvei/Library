import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

/*
  Относительно стилей, то нужно определитьс с одним подходом их задания и использования.
  Например, сейчас в проекте стили задаются так, как указано ниже (CSS-modules) + в файлах App.css, index.css
  Нужно выбрать один подход и использовать его, либо так, либо так, на усмотрение разработчика.
  Также определения стилей думаю будет смысл выносить в отдельные файлы и уже импортировать туда, где они будут использоваться.
  Ниже стилей немного указано, но их может быть достаточно много и может получится простыня кода в файле компонента.
*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"

  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
    
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(30)
  }
}))

function App() {
  const classes = useStyles();

  return(
    <>
  <AppBar position="fixed">
    <Container fixed>
      <div className={classes.overlay}/>
      <Toolbar>
        <IconButton edge="start"
         color="inherit" aria-label="menu" className={classes.menuButton}>
           <MenuIcon/>
         </IconButton>
         <Typography variant="h6" className={classes.title}>My favorite books</Typography>
         <Box mr={3}>
           <Button color="inherit" variant="outlined">Main page</Button>
         </Box>
         <Button color="secondary" variant="contained">Profile</Button>
         </Toolbar>
    </Container>
  </AppBar>

  <main>
    <Paper className={classes.mainFeaturesPost}
    style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
    <Container fixed>
      <Grid container>
        <Grid item md={6}>

          <div className={classes.mainFeaturesPostContent}>
            <Typography
            components="h1"
            variant= "h3"
            color="inherit"
            gutterBottom
            >
              Library
            </Typography>
            <Typography
            variant="h5"
            color="inherit"
            paragraph
            >
             This is my library
            </Typography>
            <Button variant="contained" color="secondary">
              Learn more
            </Button>
          </div>

        </Grid>
      </Grid>

    </Container>

    </Paper>

  </main>

  </>
  );
}

export default App;
