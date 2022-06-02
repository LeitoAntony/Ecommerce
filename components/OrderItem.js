import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem  = ({ item }) => {
  console.log(item)
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>${item.items[0].price}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 6,
  },
  date: {
    fontSize: 18,
    color: colors.dark,
  },
  total: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: "LatoRegular",
  },
});
