import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Searcher from "../components/Searcher";
import { CATEGORIES } from "../Data/Categories";
import List from "../components/List";
import TextInputCustom from "../components/TextInputCustom";
import BtnDelete from "../components/BtnDelete";
import { colors } from "../Styles/Colors";
import { useSelector } from "react-redux";

const CategoriesScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState();

  const {categories} = useSelector((state) => state.categories.value);

  useEffect(() => {
    if (input === "") setCategoriesFilter(categories);
    else {
      const categoriasFiltradas = categories.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(categoriasFiltradas);
    }
  }, [input]);

  const handleDeletesearch = () => {
    setCategoriesFilter(CATEGORIES);
    setInput("");
  };

  const handleSelectedCategory = (category) => {
    //handleCategory(category);
    navigation.push("Products", {
      categoryId: category.id,
      categoryTitle: category.category,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Searcher style={styles.searcher}>
          <TextInputCustom
            input={input}
            setInput={setInput}
            placeholder="Categoria"
          />
          <BtnDelete onPress={handleDeletesearch} iconName="erase" />
        </Searcher>
        <View style={styles.listContainer}>
          <List
            data={categoriesFilter}
            itemType="category"
            onPress={handleSelectedCategory}
          />
        </View>
      </View>
    </>
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.light,
  },
  listContainer: {
    flex: 1,
  },
  searcher: {
    justifyContent: "space-around",
  },
});
