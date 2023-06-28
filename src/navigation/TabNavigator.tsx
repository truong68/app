// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, OderStackNavigator, CartStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Oder" component={OderStackNavigator} />
      <Tab.Screen name="Cart" component={CartStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
