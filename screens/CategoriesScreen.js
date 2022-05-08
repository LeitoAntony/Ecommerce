import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Searcher from "../components/Searcher";
import { CATEGORIES } from "../Data/Categories";
import List from "../components/List";
import TextInputCustom from "../components/TextInputCustom";
import TouchableOpacityCustom from "../components/TouchableOpacityCustom";

const CategoriesScreen = () => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  useEffect(() => {
    if (input === "") setCategoriesFilter(CATEGORIES);
    else {
      const categoriasFiltradas = categoriesFilter.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(categoriasFiltradas);
    }
  }, [input]);

  const handleDeletesearch = () =>{
    setCategoriesFilter(CATEGORIES);
    setInput('');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Searcher>
          <TextInputCustom input={input} setInput={setInput} onPress={handleDeletesearch}/>
          <TouchableOpacityCustom text="Buscar" />
        </Searcher>
        <View style={styles.listContainer}>
          <List data={categoriesFilter} itemType="category" />
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
  },
  listContainer: {
    flex: 1,
  },
});
