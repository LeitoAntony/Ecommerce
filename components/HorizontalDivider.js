import { StyleSheet, View } from "react-native";
import { colors } from "../Styles/Colors";

const HorizontalDivider = ({aditionalStyles}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.divider, ...aditionalStyles}} />
    </View>
  );
};

export default HorizontalDivider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: colors.light
  },
  divider: {
    flex: 1,
    height: 1
  },
});
