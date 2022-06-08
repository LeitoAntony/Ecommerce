import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationsScreen from "../../../screens/LocationsScreen";
import SaveLocationScreen from "../../../screens/SaveLocationScreen";
import { colors } from "../../../Styles/Colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const LocationStack = () => {
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
        name="LocationsTab"
        component={LocationsScreen}
        options={({navigation}) =>({
          title: "Direcciones",
          headerRight: () => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate('Save-location')}
              >
                <Ionicons
                  name="add-circle-outline"
                  size={24}
                  color={colors.light}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
      name="Save-location"
      component={SaveLocationScreen}
      options={
          {
              title:'Guardar direccion'
          }
      }
      />
    </Stack.Navigator>
  );
};

export default LocationStack;

const styles = StyleSheet.create({});
