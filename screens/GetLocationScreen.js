import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";
import * as Location from "expo-location";
import { colors } from "../Styles/Colors";
import { API_KEY } from "../Constants/GoogleAPI";

const GetLocationScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [photo, setPhoto] = useState(null);

  //useeffect se ejecuta cuando se monta el componente
  useEffect(() => {
    //IIFE funcion autoinvocada
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    })();
  }, []);

  //Efecto para traer el mapa y luego hacer un reverse geoCode a partir de las coordenadas
  useEffect(() => {
    if (location?.lat) {
      (async () => {
        // console.log(location);
        //Seteamos la url de la foto
        setPhoto(
          `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x600&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${API_KEY}`
        );
        //Reverse geocode
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
        );
        const reverseGeocode = await response.json();
        const address = reverseGeocode.results[0].formatted_address;
        setAddress(address);
      })();
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const handleConfirmLocation = () => {
    navigation.navigate("Save-location", { address });
  };

  return (
    <View style={Styles.container}>
      <Text>{text}</Text>
      <View>
        {photo ? (
          <Image source={{ uri: photo }} style={Styles.preview} />
        ) : null}
        {address ? (
          <>
            <Text>{address}</Text>
            <Button
              title="Confirmar direccion"
              onPress={handleConfirmLocation}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "95%",
    height: 500,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default GetLocationScreen;
