import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Styles/Colors";

const Header = ({ title = "E-commerce" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: colors.light,
    fontWeight:'bold'
  },
});
