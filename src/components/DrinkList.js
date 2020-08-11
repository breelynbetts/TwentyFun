import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Card, Text, List } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

function DrinkList(props) {
  const navigation = useNavigation();
  const [drinkId, setDrinkId] = useState();
  const displayImage = (props) => (
    <Image
      {...props}
      source={{ uri: props.strDrinkThumb }}
      style={styles.image}
      onLoad={console.log(props)}
    />
  );

  const renderItem = ({ item, index }) => (
    <Card
      style={styles.card}
      key={index}
      onPress={() =>
        navigation.navigate("DrinkDisplay", {
          drinkId: item.idDrink,
        })
      }
    >
      <Text category="h6">{item.strDrink}</Text>
      <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
    </Card>
  );

  const getDrinkById = async (event) => {};

  return (
    <View>
      <List
        contentContainerStyle={styles.container}
        data={props.drinks}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 50,
  },
  card: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DrinkList;
