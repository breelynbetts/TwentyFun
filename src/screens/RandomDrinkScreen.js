import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { getRandomDrink } from "../data/api";
import DrinkCard from "../components/DrinkCard";

export default function RandomDrinkScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
    let isMounted = true;
    async function getDrink() {
      try {
        let response = await getRandomDrink();
        if (isMounted) setData(response.drinks);
        setIngredients(findIngredients(response.drinks[0]));
        setIsLoading(false);
      } catch (error) {
        setError(`Sorry something went wrong: ${error}`);
      }
    }

    getDrink();
    setIsButtonClicked(false);
    return () => {
      isMounted = false;
    };
  }, [isButtonClicked]);

  return (
    <View style={styles.root}>
      {isLoading ? (
        <Text>{error ? error : "Getting everything set up for you ..."}</Text>
      ) : (
        <DrinkCard
          title={data[0].strDrink}
          type={data[0].strAlcoholic}
          imageUrl={data[0].strDrinkThumb}
          instructions={data[0].strInstructions}
          ingredients={ingredients}
        />
      )}
      <View style={styles.button}>
        <Button onPress={() => setIsButtonClicked(true)} appearance="ghost">
          Generate Another Drink
        </Button>
      </View>
    </View>
  );
}
const ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  root: {
    height: ScreenHeight,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    flex: 2,
  },
});
