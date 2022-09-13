import axios from 'axios';

const url = 'http://localhost:5000/Recipes';

export const fetchRecipe = () => axios.get(url)
