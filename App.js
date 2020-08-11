import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import Selection from "./src/screens/Selection";
import RandomDrinkScreen from "./src/screens/RandomDrinkScreen";
import AlcTypeScreen from "./src/screens/AlcTypeScreen";
import DrinkDisplay from "./src/screens/DrinkDisplay";
import AlcoholicDrinksScreen from "./src/screens/AlcoholicDrinksScreen";
import NonalcoholicDrinksScreen from "./src/screens/NonalcoholicDrinksScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Selection" component={Selection} />
          <Stack.Screen
            name="GetDrink"
            component={RandomDrinkScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Ingredients"
            component={AlcTypeScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="DrinkDisplay"
            component={DrinkDisplay}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Alcoholic"
            component={AlcoholicDrinksScreen}
            options={{ title: "Alcoholic Drinks" }}
          />
          <Stack.Screen
            name="Virgin"
            component={NonalcoholicDrinksScreen}
            options={{ title: "Non-Alcoholic Drinks" }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
