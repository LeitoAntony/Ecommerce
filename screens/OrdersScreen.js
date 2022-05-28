import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderItem from "../components/OrderItem";
import { ORDERS } from "../Data/Order";
import { colors } from "../Styles/Colors";

const renderItem = ({ item }) => {
  <OrderItem item={item} />;
};

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={ORDERS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  }
});
