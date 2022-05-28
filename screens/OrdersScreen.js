import {
    FlatList,
    StyleSheet,
    View,
  } from "react-native";
import OrderItem from "../components/OrderItem";
  import { ORDERS } from "../Data/Order";
  import { colors } from "../Styles/Colors";
  
  const renderItem = (data) => (
    <OrderItem item={data.item}/>
  );
  
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
  