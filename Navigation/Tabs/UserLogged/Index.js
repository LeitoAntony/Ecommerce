import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../../Stacks/Shop/Index";
import CartStack from "../../Stacks/Cart/Index";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../Styles/Colors";
import OrdersStack from "../../Stacks/Orders/Index";

const BottomTabs = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName="Shop"
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Entypo name="shop" size={24} color={colors.dark} />
              <Text>Tienda</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Entypo name="shopping-cart" size={24} color={colors.dark} />
              <Text>Carrito</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="list" size={24} color={colors.dark} />
                <Text>Ordenes</Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigatorLogged;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    position: "absolute",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
