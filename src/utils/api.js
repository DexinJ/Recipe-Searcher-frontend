import { baseUrl } from "./constants";
import { processServerResopnse } from "./utils";

const storeRecipe = (id) => {
  return fetch(`${baseUrl}/users/recipes/${id}`, {
    method: "PUT",
    credentials: "include",
  }).then(processServerResopnse);
};

const popRecipe = (id) => {
  return fetch(`${baseUrl}/users/recipes/${id}`, {
    method: "DELETE",
    credentials: "include",
  }).then(processServerResopnse);
};

const getCollection = () => {
  return fetch(`${baseUrl}/users/recipes`, {
    method: "GET",
    credentials: "include",
  }).then(processServerResopnse);
};

export { storeRecipe, popRecipe, getCollection };
