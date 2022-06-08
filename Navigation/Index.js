import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthStack from "./Stacks/Auth";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const {user} = useSelector(state => state.auth.value)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {//user.token 
        <TabNavigatorLogged /> }
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
