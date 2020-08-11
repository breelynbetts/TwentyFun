import React, { useEffect, useState } from "react";
import { getDrinkById } from "../data/api";
import { Button } from "@ui-kitten/components";
import { StyleSheet, View, Dimensions } from "react-native";
import DrinkCard from "../components/DrinkCard";

export default function DrinkDisplay({ route }) {
  const { drinkId } = route.params;
  const [drink, setDrink] = useState([]);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  function findIngredients(jsonObj) {
    const ingredients = [];
    for (let [key, value] of Object.entries(jsonObj)) {
      if (key.includes("strIngredient") && value !== null) {
        ingredients.push(value);
      }
    }
    return ingredients;
  }

  useEffect(() => {
    async function findDrink() {
      try {
        const response = await getDrinkById({
          i: drinkId,
        });
        setDrink(response.drinks);
        setIngredients(findIngredients(response.drinks[0]));
      } catch (error) {
        setError(`Sorry something went wrong: ${error}`);
      }
    }

    findDrink();
  }, []);

  return (
    <View style={styles.view}>
      {drink.length > 0 && (
        <DrinkCard
          title={drink[0].strDrink}
          type={drink[0].strAlcoholic}
          imageUrl={drink[0].strDrinkThumb}
          instructions={drink[0].strInstructions}
          ingredients={ingredients}
        />
      )}
    </View>
  );
}

const ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  view: {
    height: ScreenHeight - 200,
    width: 400,
    display: "flex",
    justifyContent: "center",
  },
});
