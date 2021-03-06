import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../../screens/CategoriesScreen";
import ProductScreen from "../../../screens/ProductScreen";
import DetailScreen from "../../../screens/DetailScreen";
import { colors } from "../../../Styles/Colors";

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (   
      <Stack.Navigator
        initialRouteName="Categories"
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
  );
}

export default ShopNavigator;

const styles = StyleSheet.create({});
