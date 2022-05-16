import {
  StyleSheet,
  TextInput,
  View
} from "react-native";
import { colors } from "../Styles/Colors";

const TextInputCustom = ({ input, setInput, onPress, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        keyboardType="default"
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.light}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal:10,
    backgroundColor: colors.background,
    borderRadius: 10,
    color: colors.light,
    height: 50,
    fontSize: 18,
    flexDirection: "row",
  },
  input: {
    color: colors.light,
    height: 30,
    fontSize: 18,
  }
});
