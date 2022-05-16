import { StyleSheet, Text, View } from "react-native";
import HorizontalDivider from "./HorizontalDivider";
import { colors } from "../Styles/Colors";

const Card = ({title, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
      </View>
      <HorizontalDivider aditionalStyles={styles.aditionalStyles}/>
      <View style={styles.body}>{children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderColor: colors.dark,
    padding:10,
    margin:10,
    backgroundColor: colors.light,
    shadowColor: "#000",
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
  },
  titleContainer:{
    alignItems:'center',
  },
  title: {
      fontSize:20,
      fontWeight: 'bold',
      color: colors.dark
  },
  body: {},
  aditionalStyles:{
      backgroundColor: colors.dark
  }
});
