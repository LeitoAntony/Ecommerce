import { ActivityIndicator } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import MainNavigator from "./Navigation";
import store from "./store";
import { Provider } from "react-redux";
import { init } from "./DB"; 

init()
.then(() => {console.log('db initialiezed')})
.catch((err) => {
  console.log('error loading db')
  console.log(err)
})

export default function App() {
  const [loaded] = useFonts({
    Koulen: require("./assets/Fonts/Koulen/Koulen-Regular.ttf"),
    LatoRegular: require("./assets/Fonts/Lato/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
