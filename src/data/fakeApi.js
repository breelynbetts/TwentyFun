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

const getListOfAlcoholicDrinks = () =>
  Promise.resolve({
    drinks: [
      {
        strDrink: "'57 Chevy with a White License Plate",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
        idDrink: "14029",
      },
      {
        strDrink: "1-900-FUK-MEUP",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
        idDrink: "15395",
      },
      {
        strDrink: "110 in the shade",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
        idDrink: "15423",
      },
      {
        strDrink: "151 Florida Bushwacker",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
        idDrink: "14588",
      },
      {
        strDrink: "155 Belmont",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        idDrink: "15346",
      },
      {
        strDrink: "24k nightmare",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
        idDrink: "17060",
      },
      {
        strDrink: "252",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
        idDrink: "15288",
      },
      {
        strDrink: "3 Wise Men",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
        idDrink: "13899",
      },
      {
        strDrink: "3-Mile Long Island Iced Tea",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        idDrink: "15300",
      },
      {
        strDrink: "410 Gone",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
        idDrink: "13581",
      },
    ],
  });

const getListOfNonalcoholicDrinks = () =>
  Promise.resolve({
    drinks: [
      {
        strDrink: "Afterglow",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        idDrink: "12560",
      },
      {
        strDrink: "Alice Cocktail",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        idDrink: "12562",
      },
      {
        strDrink: "Aloha Fruit punch",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
        idDrink: "12862",
      },
      {
        strDrink: "Apello",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
        idDrink: "15106",
      },
      {
        strDrink: "Apple Berry Smoothie",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
        idDrink: "12710",
      },
      {
        strDrink: "Apple Karate",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
        idDrink: "12564",
      },
      {
        strDrink: "Banana Cantaloupe Smoothie",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
        idDrink: "12708",
      },
      {
        strDrink: "Banana Milk Shake",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
        idDrink: "12654",
      },
    ],
  });

const searchCocktails = () =>
  Promise.resolve({
    drinks: [
      {
        idDrink: "11007",
        strDrink: "Margarita",
        strDrinkAlternate: null,
        strDrinkES: null,
        strDrinkDE: null,
        strDrinkFR: null,
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
        strTags: "IBA,ContemporaryClassic",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions:
          "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        strInstructionsES: null,
        strInstructionsDE:
          "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
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
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1/2 oz ",
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
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:42:59",
      },
      {
        idDrink: "11118",
        strDrink: "Blue Margarita",
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
          "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
        strInstructionsES: null,
        strInstructionsDE:
          "Den Rand des Cocktailglases mit Limettensaft einreiben. Den Rand in grobes Salz tauchen. Tequila, blauen Curacao und Limettensaft mit Eis schütteln, in das mit Salz umhüllte Glas abseihen und servieren.",
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Blue Curacao",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
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
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1 oz ",
        strMeasure3: "1 oz ",
        strMeasure4: "Coarse ",
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
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:51:53",
      },
      {
        idDrink: "17216",
        strDrink: "Tommy's Margarita",
        strDrinkAlternate: null,
        strDrinkES: null,
        strDrinkDE: null,
        strDrinkFR: null,
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
        strTags: "IBA,NewEra",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "New Era Drinks",
        strAlcoholic: "Alcoholic",
        strGlass: "Old-Fashioned glass",
        strInstructions: "Shake and strain into a chilled cocktail glass.",
        strInstructionsES: null,
        strInstructionsDE:
          "Schütteln und in ein gekühltes Cocktailglas abseihen.",
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Lime Juice",
        strIngredient3: "Agave syrup",
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
        strMeasure1: "4.5 cl",
        strMeasure2: "1.5 cl",
        strMeasure3: "2 spoons",
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
        dateModified: "2017-09-02 18:37:54",
      },
      {
        idDrink: "16158",
        strDrink: "Whitecap Margarita",
        strDrinkAlternate: null,
        strDrinkES: null,
        strDrinkDE: null,
        strDrinkFR: null,
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
        strTags: null,
        strVideo: null,
        strCategory: "Other/Unknown",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Margarita/Coupette glass",
        strInstructions:
          "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        strInstructionsES: null,
        strInstructionsDE: "Alle Zutaten in einen Mixer geben und mischen.",
        strInstructionsFR: null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
        strIngredient1: "Ice",
        strIngredient2: "Tequila",
        strIngredient3: "Cream of coconut",
        strIngredient4: "Lime juice",
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
        strMeasure1: "1 cup ",
        strMeasure2: "2 oz ",
        strMeasure3: "1/4 cup ",
        strMeasure4: "3 tblsp fresh ",
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
        dateModified: "2015-09-02 17:00:22",
      },
    ],
  });

export {
  apiHost,
  getRandomDrink,
  getIngredients,
  getDrinksByIngredient,
  getDrinkById,
  getListOfAlcoholicDrinks,
  getListOfNonalcoholicDrinks,
  searchCocktails,
};
