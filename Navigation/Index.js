import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged/Index";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigatorLogged />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
