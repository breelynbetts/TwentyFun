let api = "https://misconfigured-app.com/";

const apiHost = (host) => {
  api = host;
};
const urlFor = (resource) => `${api}${resource}`;

const HTTP_OK = 200;

const throwResponseError = (response) => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const emitNativeError = (error) => {
  throw error;
};

const statusCheck = (successStatuses) => (response) => {
  if (successStatuses.includes(response.status)) {
    return response;
  } else {
    throwResponseError(response);
  }
};

const okCheck = statusCheck([HTTP_OK]);

const headers = {
  "Content-Type": "application/json",
};

const paramsWithApiKey = (params) => {
  const result = new URLSearchParams(params);
  return result;
};

const query = async (resource, params) => {
  try {
    const response = await fetch(
      `${urlFor(resource)}?${paramsWithApiKey(params)}`,
      {
        headers,
      }
    );

    const responseJson = okCheck(response);
    return responseJson.json();
  } catch (error) {
    emitNativeError(error);
  }
};

const getDrinkById = (params) => query("/lookup.php", params);
const getRandomDrink = (params) => query("/random.php", params);
const getListOfAlcoholicDrinks = (params) => query("/filter.php", params);
const getListOfNonalcoholicDrinks = (params) => query("/filter.php", params);
const getDrinksByIngredient = (params) => query("/filter.php", params);
const getIngredients = (params) => query("/list.php", params);
const searchCocktails = (params) => query("/search.php", params);

export {
  apiHost,
  getDrinkById,
  getRandomDrink,
  getListOfAlcoholicDrinks,
  getListOfNonalcoholicDrinks,
  getDrinksByIngredient,
  getIngredients,
  searchCocktails,
};
