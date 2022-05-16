import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { colors } from "../../Styles/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CategotyItem = ({ category }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        ...styles.container,
        maxWidth: width * 0.4,
        maxHeight: width * 0.4,
        margin: width < 330 ? 10: 15,
      }}
    >
      <Text style={styles.text}>{category.category}</Text>
    </View>
  );
};

export default CategotyItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
});
