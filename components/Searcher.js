import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Styles/Colors";

const Searcher = ({ children, aditionalStyles }) => {
    return (
        <View style={{...styles.searcherContainer, ...aditionalStyles}}>
            {children}
        </View>
    )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        width: '100%',
        margin: 10,
        padding: 10,
        shadowColor: "#000",
        alignItems:'center',
        justifyContent:'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 12,
    }
})