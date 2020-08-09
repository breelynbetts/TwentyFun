import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text, Divider } from "@ui-kitten/components";

const DrinkCard = (props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.view}>
        <Text category="h6">{props.title}</Text>
        <Text category="s1">{props.type}</Text>
      </View>
      <Divider />
      <Image
        source={{
          uri: props.imageUrl,
        }}
        style={styles.image}
      />
      <Text category="s1">Ingredients:</Text>
      <Text style={styles.ingredients}>{props.ingredients.join(", ")}</Text>
      <Text category="s1">Instructions:</Text>
      <Text>{props.instructions}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    margin: 20,
  },
  view: {
    margin: 10,
  },
  card: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    flex: 5,
  },
  ingredients: {
    marginBottom: 4,
  },
});

export default DrinkCard;
