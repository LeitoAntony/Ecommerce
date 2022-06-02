import { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    View,
  } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";
  import { ORDERS } from "../Data/Order";
import { getOrders } from "../Features/Orders";
  import { colors } from "../Styles/Colors";
  
  const renderItem = (data) => (
    <OrderItem item={data.item}/>
  );
  
  const OrdersScreen = () => {
    const {orders} = useSelector((state) => state.orders.value)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getOrders())
    }, [])
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.date}
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
  