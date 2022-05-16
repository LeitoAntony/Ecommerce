import { View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../../Styles/Colors";
import Card from "../Card";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Card title={product.description}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </Card>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height:300,
    resizeMode: 'cover',
    borderRadius:10,
  },
});
