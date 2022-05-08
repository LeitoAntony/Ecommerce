import { FlatList, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";
import CategoryItem from './CategoryItem'

const List = ({ data, itemType = 'category' }) => {

    const fnRender = ({item}) => {
        return(
            itemType === "category" ?
            <CategoryItem category={item}/>
            :
            <ProductItem/>
        )
    }

    return (
        <FlatList
            numColumns={itemType === "category" ? 2: 1}
            data={data}
            renderItem={fnRender}
            keyExtractor={item => item.id}
        />
    )
}

export default List

const styles = StyleSheet.create({
})