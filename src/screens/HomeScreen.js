import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 4,
  },
  image: {
    width: 400,
    height: 400,
  },
});

const HomeScreen = ({ navigation }) => (
  <Layout style={styles.homeScreen}>
    <Image style={styles.image} source={require("../data/logo.png")} />
    <Button
      style={styles.button}
      status="basic"
      onPress={() => navigation.navigate("Selection")}
    >
      Continue As Guest
    </Button>
  </Layout>
);

export default HomeScreen;
