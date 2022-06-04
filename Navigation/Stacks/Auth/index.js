import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from '../../../Styles/Colors';
import LoginScreen from '../../../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
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
          headerShown: false
        }}
      >
        <Stack.Screen
          name= "auth"
          component={LoginScreen}
          options={{
            title: "Auth"
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  );
};

export default AuthStack

const styles = StyleSheet.create({})