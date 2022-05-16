import { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesScreen from "./screens/CategoriesScreen";
import DetailScreen from "./screens/DetailScreen";
import ProductScreen from "./screens/ProductScreen";
import {useFonts} from 'expo-font';

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);
  const [productSelected, setProductSelected] = useState(null);

  const handleCategory = (category) => {
    setCategorySelected(category);
  };
  const handleProduct = (product) => {
    setProductSelected(product);
  };

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });
  
  if (!loaded) {
    return <ActivityIndicator/>;
  }

  return (
    <SafeAreaView style={style.container}>
      {!categorySelected ? (
        <CategoriesScreen handleCategory={handleCategory} />
      ) : !productSelected ? (
        <ProductScreen
          category={categorySelected}
          handleProduct={handleProduct}
          handleCategory={handleCategory}
        />
      ) : (
        <DetailScreen product={productSelected} handleProduct={handleProduct} />
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
