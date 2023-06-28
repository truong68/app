// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Offers from "../screens/Offers";
import Oder from "../screens/Oder";
import Menu from "../screens/Menu"
import Cart from "../screens/Cart";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Oder" component={Oder} />
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const OderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Oder" component={Oder} />
    </Stack.Navigator>
  );
}
const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, OderStackNavigator, CartStackNavigator };



