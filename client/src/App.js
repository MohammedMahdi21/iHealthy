import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from "./components/Recipes/Recipe";
import Form from "./components/Form/Form";
import recipes from './images/recipes.png'
import useStyles from './styles'

const App = function () {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">Recipes</Typography>
        <img className={classes.image} src={recipes} alt="recipes" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  )
}

export default App