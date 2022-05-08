import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "../Styles/Colors";

const TextInputCustom = ({ input, setInput, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        keyboardType="default"
        style={styles.input}
        placeholder="Filtro"
        placeholderTextColor={colors.light}
      />
      <TouchableOpacity
        style={styles.btnFind}
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.text}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: colors.background,
    borderRadius: 10,
    color: colors.light,
    height: 50,
    fontSize: 18,
    flexDirection: "row",
  },
  input: {
    flex: 0.9,
    color: colors.light,
    height: 30,
    fontSize: 18,
  },
  btnFind: {
    flex: 0.1,
    color: colors.light,
    padding: 5,
    borderColor: colors.primary,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.light,
  },
});
