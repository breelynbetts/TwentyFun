import React, { useState, useEffect } from "react";
import { getIngredients } from "../data/fakeApi";
import {
  Layout,
  Text,
  Button,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

export default function AlcTypeSceen() {
  const [ingredientList, setIngredientList] = useState();
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [displayValue, setDisplayValue] = useState("Select Ingredient");

  useEffect(() => {
    let isMounted = true;

    async function populateIngredientsList() {
      try {
        const response = await getIngredients();
        if (isMounted) setIngredientList(response.drinks);
      } catch (error) {
        alert(`Sorry something went wrong: ${error}`);
      }
    }

    populateIngredientsList();
    return () => (isMounted = false);
  }, []);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setDisplayValue(ingredientList[index.row].strIngredient1);
  };

  return (
    <View style={styles.view}>
      <Text category="h6">Ingredients</Text>
      <Text category="s1">
        Select an ingredient below to generate a list of drinks.
      </Text>
      {ingredientList && (
        <Select
          style={styles.select}
          placeholder="Select Ingredient"
          value={displayValue}
          selectedIndex={selectedIndex}
          onSelect={(index) => handleSelect(index)}
        >
          {ingredientList.map((item, index) => {
            return <SelectItem key={index} title={item.strIngredient1} />;
          })}
        </Select>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    margin: 40,
    width: "75%",
  },
});
