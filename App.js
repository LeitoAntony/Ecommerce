import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import MainNavigator from "./Navigation/Index";

export default function App() {
  /*const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleCategory = (category) => {
    setCategorySelected(category);
  };
  const handleProduct = (product) => {
    setProductSelected(product);
  };
*/

  const [loaded] = useFonts({
    Koulen: require("./assets/Fonts/Koulen/Koulen-Regular.ttf"),
    LatoRegular: require("./assets/Fonts/Lato/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigator />
    </SafeAreaView>
  );
}
