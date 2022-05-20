import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../Styles/Colors";
import { Entypo } from "@expo/vector-icons";

const BtnDelete = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name={iconName} size={30} color={colors.accent} />
    </TouchableOpacity>
  );
};

export default BtnDelete;

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
});
