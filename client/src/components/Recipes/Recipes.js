import React from "react";
import Recipe from "./Recipe/Recipe";

import useStyles from './styles'

const Recipes = function () {
  
  const classes = useStyles();
  return(
    <>
      <h1>
      Recipes
      </h1>

      <Recipe />
      <Recipe />
    </>

  );
}

export default Recipes;