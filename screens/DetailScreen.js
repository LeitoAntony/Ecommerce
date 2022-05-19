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

const DetailScreen = ({
  product = {
    id: 1,
    category: 1,
    description: "Product 1",
    price: 29.99,
    image: "https://picsum.photos/200/300",
  },
  navigation,
}) => {
  const { width, height } = useWindowDimensions();

  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape"), [height, width];
  });

  const handleBack = () => {
    navigation.goBack();
  };

  return (
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
