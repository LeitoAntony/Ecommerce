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

const DetailScreen = ({ product, handleProduct }) => {
  const { width, height } = useWindowDimensions();

  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape"), [height, width];
  });

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
      <Button
        title="Atras"
        onPress={() => {
          handleProduct(null);
        }}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerVertical: {
    flex: 1,
    flexDirection: "column",
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 0.8 * Dimensions.get("window").width,
    height: 300,
  },
});
