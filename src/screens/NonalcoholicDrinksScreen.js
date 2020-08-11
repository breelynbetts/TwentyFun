import React, { useEffect, useState } from "react";
import DrinkList from "../components/DrinkList";
import { getListOfNonalcoholicDrinks } from "../data/fakeApi";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "@ui-kitten/components";

export default function NonalcoholicDrinksScreen() {
  const [virginDrinks, setVirginDrinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getVirginDrinks() {
      try {
        const response = await getListOfNonalcoholicDrinks();
        setVirginDrinks(response.drinks);
      } catch (error) {
        console.log(error);
        setError(`Sorry something went wrong: ${error}`);
      }
    }

    getVirginDrinks();
  }, []);

  return (
    <View style={styles.view}>
      <Text category="h4" style={styles.title}>
        Non-Alcoholic Drinks
      </Text>
      {virginDrinks.length > 0 && <DrinkList drinks={virginDrinks} />}
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
