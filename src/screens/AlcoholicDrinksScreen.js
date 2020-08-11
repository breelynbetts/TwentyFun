import React, { useEffect, useState } from "react";
import DrinkList from "../components/DrinkList";
import { getListOfAlcoholicDrinks } from "../data/api";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "@ui-kitten/components";

export default function AlcoholicDrinksScreen() {
  const [alcoholicDrinks, setAlcoholicDrinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAlcoholicDrinks() {
      try {
        const response = await getListOfAlcoholicDrinks({ a: "Alcoholic" });
        setAlcoholicDrinks(response.drinks);
      } catch (error) {
        console.log(error);
        setError(`Sorry something went wrong: ${error}`);
      }
    }

    getAlcoholicDrinks();
  }, []);

  return (
    <View style={styles.view}>
      <Text category="h4" style={styles.title}>
        Alcoholic Drinks
      </Text>
      {alcoholicDrinks.length > 0 && <DrinkList drinks={alcoholicDrinks} />}
    </View>
  );
}
const ScreenHeight = Dimensions.get("screen").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  view: {
    height: ScreenHeight,
    width: ScreenWidth,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    margin: 25,
  },
});
