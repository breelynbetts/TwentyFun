import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  selectionScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    width: "75%",
    height: "6%",
    margin: "2%",
  },
});

const Selection = ({ navigation }) => (
  <Layout style={styles.selectionScreen}>
    <Text category="h4">Find A Drink!</Text>
    <Button
      style={styles.button}
      status="basic"
      onPress={() => navigation.navigate("Search")}
    >
      Search For A Cocktail
    </Button>
    <Button
      style={styles.button}
      status="basic"
      onPress={() => navigation.navigate("Ingredients")}
    >
      Filter by Type of Alcohol
    </Button>
    <Button
      style={styles.button}
      status="basic"
      onPress={() => navigation.navigate("Alcoholic")}
    >
      See List of Alcoholic Drinks
    </Button>
    <Button
      style={styles.button}
      status="basic"
      onPress={() => navigation.navigate("Virgin")}
    >
      See List of Non-Alcoholic Drinks
    </Button>
    <Button
      style={styles.button}
      status="basic"
      onPress={() => navigation.navigate("GetDrink")}
    >
      Get A Random Drink
    </Button>
  </Layout>
);

export default Selection;
