import { APIKey } from "./constants";
import { processServerResopnse } from "./utils";

const getRecipe = (ingredients) => {
  return fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${ingredients}&number=20`
  ).then(processServerResopnse);
};

const getRecipeInfo = (id) => {
  return fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKey}`
  ).then(processServerResopnse);
};

export { getRecipe, getRecipeInfo };
