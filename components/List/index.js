import { FlatList, StyleSheet, Pressable } from "react-native";
import ProductItem from "./ProductItem";
import CategoryItem from "./CategoryItem";

const List = ({ data, itemType = "category", onPress }) => {

  const fnRender = ({ item }) => {
    return (
      <Pressable onPress={() => onPress(item)}>
        {itemType === "category" ? (
          <CategoryItem category={item} />
        ) : (
          <ProductItem product={item} />
        )}
      </Pressable>
    );
  };

  return (
    <FlatList
      numColumns={itemType === "category" ? 2 : 1}
      data={data}
      renderItem={fnRender}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
