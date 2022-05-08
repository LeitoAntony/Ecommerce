import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../Styles/Colors";

const CategotyItem = ({category}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{category.category}</Text>
        </View>
    )
}

export default CategotyItem

const styles = StyleSheet.create({
    container:{
        width:150,
        height:150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:15,
        backgroundColor : colors.secondary,
        margin:15,
        borderRadius:10,
        fontSize: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,      
        elevation: 8,
    },
    text:{
        fontSize: 18,
        color: colors.primary
    }
})