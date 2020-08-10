import React, { useState, useEffect } from "react";
import { getIngredients, getDrinksByIngredient } from "../data/fakeApi";
import {
  Layout,
  Text,
  Button,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import DrinkList from "../components/DrinkList";

export default function AlcTypeSceen() {
  const [ingredientList, setIngredientList] = useState();
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [displayValue, setDisplayValue] = useState("Select Ingredient");
  const [error, setError] = useState(null);
  const [drinks, setDrinks] = useState([]);

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

  const performSelect = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const result = await getDrinksByIngredient({
        i: displayValue,
      });
      setDrinks(result.drinks);
    } catch (error) {
      setError(`Sorry something went wrong: ${error}`);
    }
  };

  return (
    <View style={styles.view}>
      <Text category="h6">Ingredients</Text>
      <Text category="s1">
        Select an ingredient below to generate a list of drinks.
      </Text>

      <View style={styles.innerView}>
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
        <Button onPress={performSelect}>Search</Button>
      </View>
      {error && <Text>{error}</Text>}
      {drinks.length > 0 && <DrinkList drinks={drinks} />}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
  innerView: {
    marginTop: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  select: {
    width: "60%",
  },
});
