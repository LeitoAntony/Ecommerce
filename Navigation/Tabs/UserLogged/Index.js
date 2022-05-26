import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../../Stacks/Shop/Index";
import CartStack from "../../Stacks/Cart/Index";

const BottomTabs = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
    
    >
      <BottomTabs.Screen name="ShopTab" component={ShopNavigator} />
      <BottomTabs.Screen name="CartTab" component={CartStack} />
    </BottomTabs.Navigator>
  );
};

export default TabNavigatorLogged;

const styles = StyleSheet.create({});
