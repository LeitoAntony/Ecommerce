import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { colors } from "../Styles/Colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../Features/Locations";

const SaveLocationScreen = () => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();

  const handleTakePicture = () => {};
  const handlePickLibrary = () => {};
  const handleConfirm = async () => {
    dispatch(addLocation(title))
    setTitle('')
  };

  return (
    <View style={styles.container}>
      <Text>Nueva dirección</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Título" />
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : null}
      <Button title="Tomar una foto" onPress={handleTakePicture} />
      <Button title="Seleccionar de la galería" onPress={handlePickLibrary} />
      <Button title="Confirmar" onPress={handleConfirm}></Button>
    </View>
  );
};

export default SaveLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.secondary,
  },
  image: {
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.primary,
  },
});
