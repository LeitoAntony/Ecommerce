import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";
import { SafeAreaView } from "react-native-safe-area-context";

const MainNavigator = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <TabNavigatorLogged />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
