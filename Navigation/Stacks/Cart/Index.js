import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../../screens/CartScreen";
import { colors } from "../../../Styles/Colors";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 26,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito",
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
