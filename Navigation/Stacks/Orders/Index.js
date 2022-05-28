import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrdersScreen from '../../../screens/OrdersScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from '../../../Styles/Colors';

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontFamily: "Koulen",
            fontSize: 28,
          },
          headerTitleAlign: "center",
          // headerTransparent: true,
          // header: () => {
          //   return <Header/>
          // }
        }}
      >
        <Stack.Screen
          name= "Orders"
          component={OrdersScreen}
          options={{
            title: "Ordenes"
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  );
};

export default OrdersStack

const styles = StyleSheet.create({})