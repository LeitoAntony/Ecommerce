import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../Styles/Colors";

const TouchableOpacityCustom = ({ text }) => {
  return (
    <TouchableOpacity style={styles.btnFind}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableOpacityCustom;

const styles = StyleSheet.create({
  btnFind: {
    backgroundColor: colors.accent,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    flex: 1,
  },
  text: {
    color: colors.light,
    fontSize: 18,
  },
});
