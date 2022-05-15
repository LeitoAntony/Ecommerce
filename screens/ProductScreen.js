import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Header from "../components/Header";
import Searcher from "../components/Searcher";
import { PRODUCTS } from "../Data/Products";
import List from "../components/List";
import TextInputCustom from "../components/TextInputCustom";
import BtnDelete from "../components/BtnDelete";
import { colors } from "../Styles/Colors";

const ProductScreen = ({
  category = { id: 1, category: "Ropa" },
  handleProduct,
  handleCategory,
}) => {
  const [input, setInput] = useState("");
  const [initialProducts, setInitilProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    if (initialProducts.length != 0) {
      if (input === "") setProductsFilter(initialProducts);
      else {
        const productosFiltrados = initialProducts.filter((product) =>
          product.description.toLowerCase().includes(input.toLowerCase())
        );
        setProductsFilter(productosFiltrados);
      }
    }
  }, [input, initialProducts]);

  useEffect(() => {
    const productosIniciales = PRODUCTS.filter(
      (product) => product.category === category.id
    );
    setInitilProducts(productosIniciales);
  }, []);

  const handleDeletesearch = () => {
    setInput("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoid}
      keyboardVerticalOffset={10}
    >
        <Header title={category.category} />
        <View style={styles.container}>
          <Searcher>
            <TextInputCustom
              input={input}
              setInput={setInput}
              onPress={handleDeletesearch}
              placeholder="Elegir producto"
            />
            <BtnDelete
              input={input}
              setInput={setInput}
              onPress={handleDeletesearch}
              iconName="erase"
            />
          </Searcher>
          <View style={styles.listContainer}>
            <List
              data={productsFilter}
              itemType="product"
              onPress={handleProduct}
            />
            <Button title="Atras" onPress={() => handleCategory(null)} />
          </View>
        </View>
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
    top: -10,
    backgroundColor: colors.light,
  },
  listContainer: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
});
