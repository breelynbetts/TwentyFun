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

const getDrinksByIngredient = () =>
  Promise.resolve({
    drinks: [
      {
        strDrink: "3-Mile Long Island Iced Tea",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        idDrink: "15300",
      },
      {
        strDrink: "69 Special",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
        idDrink: "13940",
      },
      {
        strDrink: "A1",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        idDrink: "17222",
      },
      {
        strDrink: "Abbey Cocktail",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
        idDrink: "17834",
      },
      {
        strDrink: "Abbey Martini",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
        idDrink: "17223",
      },
      {
        strDrink: "Ace",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
        idDrink: "17225",
      },
      {
        strDrink: "Adam & Eve",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
        idDrink: "17226",
      },
      {
        strDrink: "Addison",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
        idDrink: "17228",
      },
      {
        strDrink: "Alaska Cocktail",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
        idDrink: "11013",
      },
      {
        strDrink: "Alexander",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/urystu1478253039.jpg",
        idDrink: "11014",
      },
    ],
  });

const getDrinkById = () =>
  Promise.resolve({
    drinks: [
      {
        idDrink: "11936",
        strDrink: "Pink Gin",
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
        strGlass: "White wine glass",
        strInstructions:
          "Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.",
        strInstructionsES: null,
        strInstructionsDE:
          "Den Bitter in ein Weinglas gießen. Das Glas umrühren, um die Innenseite mit dem Bitter zu überziehen, den Überschuss ausschütten. Gießen Sie den Gin in das Glas. Füge kein Eis hinzu.",
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg",
        strIngredient1: "Bitters",
        strIngredient2: "Gin",
        strIngredient3: null,
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
        strMeasure1: "3 dashes ",
        strMeasure2: "2 oz ",
        strMeasure3: null,
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
        dateModified: "2017-09-08 17:36:58",
      },
    ],
  });

export {
  apiHost,
  getRandomDrink,
  getIngredients,
  getDrinksByIngredient,
  getDrinkById,
};
