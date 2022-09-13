import RecipeMessage from "../models/recipeMassage.js"

export const getRecipes = async (req, res) => {
  try {
    const recipeMessage = await RecipeMessage.find();

    res.status(200).json(recipeMessage);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createRecipe = async (req, res) => {
  const recipe = req.body;

  const newRecipe = new RecipeMessage(recipe);
  try {
    await newRecipe.save()

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}