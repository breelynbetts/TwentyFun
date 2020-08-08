import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Card, Layout, Text, Divider } from "@ui-kitten/components";
import { getRandomDrink } from "../data/fakeApi";
import { FlexStyleProps } from "@ui-kitten/components/devsupport";

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
          uri:
            "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
        }}
        style={styles.image}
      />
    </Card>
  );
};

export default function RandomDrinkScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDrink() {
      try {
        let response = await getRandomDrink();
        setData(response.drinks);
        setIsLoading(false);
      } catch (error) {
        setError(`Sorry something went wrong: ${error}`);
      }
    }

    getDrink();
  }, []);

  console.log(data);

  return (
    <React.Fragment>
      {isLoading ? (
        <Text>{error ? error : "Getting everything set up for you ..."}</Text>
      ) : (
        <DrinkCard
          title={data[0].strDrink}
          type={data[0].strAlcoholic}
          imageUrl={data[0].strDrinkThumb}
        />
      )}
    </React.Fragment>
  );
}

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
  card: { margin: 10, display: "flex", alignItems: "center" },
});
