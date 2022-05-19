import { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Searcher from "../components/Searcher";
import { CATEGORIES } from "../Data/Categories";
import List from "../components/List";
import TextInputCustom from "../components/TextInputCustom";
import BtnDelete from "../components/BtnDelete";
import { colors } from "../Styles/Colors";

const CategoriesScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  useEffect(() => {
    if (input === "") setCategoriesFilter(CATEGORIES);
    else {
      const categoriasFiltradas = CATEGORIES.filter((category) =>
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
    navigation.navigate("Products", {
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
            onPress={handleDeletesearch}
            placeholder="Categoria"
          />
          <BtnDelete
            input={input}
            setInput={setInput}
            onPress={handleDeletesearch}
            iconName="erase"
          />
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
