import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../Data/Products";

const DetailScreen = ({ navigation, route }) => {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape"), [height, width];
  });

  useEffect(() => {
    const productSelected = PRODUCTS.find(
      (product) => product.id === productId
    );
    setProduct(productSelected);
  }, [productId]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    product && (
      <View
        style={
          orientation === "portrait"
            ? styles.containerVertical
            : styles.containerHorizontal
        }
      >
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{product.description}</Text>
        <Text>$ {product.price}</Text>
        <Button title="Atras" onPress={handleBack} />
      </View>
    )
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerVertical: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 0.8 * Dimensions.get("window").width,
    height: 300,
  },
});
