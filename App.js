import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

const HomeScreen = () => (
  <Layout style={styles.homeScreen}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
