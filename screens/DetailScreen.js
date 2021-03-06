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
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Features/Cart";

const DetailScreen = ({ navigation, route }) => {
  //const { productId } = route.params;

  //const [product, setProduct] = useState(null);
  const { productSelected } = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape"), [height, width];
  });

  /*useEffect(() => {
    const productSelected = PRODUCTS.find(
      (product) => product.id === productId
    );
    setProduct(productSelected);
  }, [productId]);*/

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAdd = (id) => {
    dispatch(addItem({ id }));
  };

  return (
    productSelected && (
      <View
        style={
          orientation === "portrait"
            ? styles.containerVertical
            : styles.containerHorizontal
        }
      >
        <Image
          source={{ uri: productSelected.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{productSelected.description}</Text>
        <Text>$ {productSelected.price}</Text>
        <Button
          title="Agregar al carrito"
          onPress={() => handleAdd(productSelected.id)}
        />
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
