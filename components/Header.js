import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Styles/Colors";

const Header = () => {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>Encabezado</Text>
      </View>
    )
  }
  
  export default Header

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: colors.background,
            height:80,
            width: '100%',
            alignItems :'center',
            justifyContent:'flex-end'
        },
        text:{
            fontSize:18,
            color: colors.light
        }
    }
);