import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 2,
  },
});

const HomeScreen = ({ navigation }) => (
  <Layout style={styles.homeScreen}>
    <Text category="h1">HOME</Text>
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
