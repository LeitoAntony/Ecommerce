import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native"
import Searcher from "../components/Searcher";
import { PRODUCTS } from "../Data/Products";
import List from "../components/List";
import TextInputCustom from "../components/TextInputCustom";
import { colors } from "../Styles/Colors";
import BtnDelete from "../components/BtnDelete";

const ProductScreen = ({
  category = { id: 1, category: "Ropa" },
  navigation,
  route,
}) => {
  const [input, setInput] = useState("");
  const [initialProducts, setInitilProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const { categoryId } = route.params;

  const handleDeleteSearch = () => {
    setInput("");
  };
  useEffect(() => {
    if (initialProducts.length != 0) {
      if (input === "") {
        setProductsFilter(initialProducts);
      } else {
        const productosFiltrados = initialProducts.filter((product) =>
          product.description.toLowerCase().includes(input.toLowerCase())
        );
        setProductsFilter(productosFiltrados);
      }
    }
  }, [input, initialProducts]);

  useEffect(() => {
    const productosIniciales = PRODUCTS.filter(
      product => product.category === categoryId
    );
    setInitilProducts(productosIniciales);
  }, [categoryId]);

  

  const handleDetailProduct = (product) => {
    navigation.navigate("Detail", {
      productId: product.id,
      productTitle: product.description,
    });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoid}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Searcher>
            <TextInputCustom
              value={input}
              setInput={setInput}
              placeholder="Ingrese producto a buscar"
            />
            <BtnDelete onPress={handleDeleteSearch} iconName="erase" />
          </Searcher>
          <View style={styles.listContainer}>
            <List
              data={productsFilter}
              itemType={"Producto"}
              onPress={handleDetailProduct}
            />
            <Button title="Atras" onPress={handleBack} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.light,
  },
  listContainer: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
});
