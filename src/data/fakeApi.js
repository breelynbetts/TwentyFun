const apiHost = () => {}; // No-op in our mock version.

const getRandomDrink = () =>
  Promise.resolve({
    drinks: [
      {
        idDrink: "11046",
        strDrink: "Applecar",
        strDrinkAlternate: null,
        strDrinkES: null,
        strDrinkDE: null,
        strDrinkFR: null,
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
        strTags: null,
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions:
          "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        strInstructionsES: null,
        strInstructionsDE:
          "Alle Zutaten mit Eis schütteln, in ein Cocktailglas abseihen und servieren.",
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
        strIngredient1: "Applejack",
        strIngredient2: "Triple sec",
        strIngredient3: "Lemon juice",
        strIngredient4: null,
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "1 oz ",
        strMeasure2: "1 oz ",
        strMeasure3: "1 oz ",
        strMeasure4: null,
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strCreativeCommonsConfirmed: "No",
        dateModified: "2017-09-02 23:02:44",
      },
    ],
  });

const getIngredients = () =>
  Promise.resolve({
    drinks: [
      {
        strIngredient1: "Light rum",
      },
      {
        strIngredient1: "Applejack",
      },
      {
        strIngredient1: "Gin",
      },
      {
        strIngredient1: "Dark rum",
      },
      {
        strIngredient1: "Sweet Vermouth",
      },
      {
        strIngredient1: "Strawberry schnapps",
      },
      {
        strIngredient1: "Scotch",
      },
      {
        strIngredient1: "Apricot brandy",
      },
      {
        strIngredient1: "Triple sec",
      },
      {
        strIngredient1: "Southern Comfort",
      },
      {
        strIngredient1: "Orange bitters",
      },
      {
        strIngredient1: "Brandy",
      },
    ],
  });

export { apiHost, getRandomDrink, getIngredients };
