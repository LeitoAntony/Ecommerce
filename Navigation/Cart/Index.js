import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Index = () => {
  return (
    <NavigationContainer>
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
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "E-commerce",
          }}
        />
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle,
            headerStyle: {
              backgroundColor:
                route.params.categoryId === 1 ? colors.dark : colors.background,
            },
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.productTitle,
            headerTintColor: colors.accent,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})