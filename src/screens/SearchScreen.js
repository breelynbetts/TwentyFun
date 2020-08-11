import React, { useState } from "react";
import { Layout, Text, Button, Input } from "@ui-kitten/components";
import { StyleSheet, View, Dimensions } from "react-native";
import { searchCocktails } from "../data/fakeApi";
import DrinkList from "../components/DrinkList";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = async (event) => {
    try {
      const response = await searchCocktails();
      setSearchResults(response.drinks);
    } catch (error) {
      setError(`Sorry something went wrong: ${error}`);
    }
  };
  return (
    <View style={styles.view}>
      <Text category="h4">Search for a Cocktail</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Search"
          value={query}
          onChangeText={(e) => setQuery(e)}
          style={styles.input}
        />
        <Button appearance="ghost" onPress={performSearch}>
          Search
        </Button>
      </View>

      {searchResults.length > 0 && <DrinkList drinks={searchResults} />}
    </View>
  );
}

const ScreenHeight = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  view: {
    height: ScreenHeight,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "70%",
  },
  inputContainer: {
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
