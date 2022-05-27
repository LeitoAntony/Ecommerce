import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartItem from "../components/CartItem";
import { PRODUCTSELECTED } from "../Data/ProductSelected";
import { colors } from "../Styles/Colors";

const handleDelete = (id) =>
  console.log(`Se elimina del carrito el producto con id: ${id}`);
const handleConfirm = () => console.log("Se confirma la compra");

const renderItem = (data) => (
  <CartItem item={data.item} onDelete={handleDelete} />
);

const CartScreen = () => {
  const total = 12000;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={PRODUCTSELECTED}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: colors.secondary,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontFamily: "LatoRegular",
    padding: 8,
    color : colors.light
  },
});
