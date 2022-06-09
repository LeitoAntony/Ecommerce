import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../Styles/Colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../Features/Locations";
import * as ImagePicker from "expo-image-picker";
import renamePathAndMove from "../Utils/renamepath";

const SaveLocationScreen = () => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();

  const handleTakePicture = async () => {
    const isVerified = getPermission();
    if (!isVerified) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    setPicture(image.uri);
  };
  const handlePickLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };
  const handleConfirm = async () => {
    const path = await renamePathAndMove(picture);
    dispatch(addLocation({ title, picture, id: Date.now() }));
    setTitle("");
    setPicture("");
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      return false;
    }

    return true;
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
    height: "50%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.primary,
  },
});
