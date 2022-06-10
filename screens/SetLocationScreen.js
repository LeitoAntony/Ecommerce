import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { API_KEY } from "../Constants/GoogleAPI";

const SetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const initialRegion = {
    latitude: 37.4243456,
    longitude: -122.2345675,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    //IIFE funcion autoinvocada
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const handleSelectLocation = (event) => {
    setLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleConfirm = () => {
    //Reverse geocode
    (async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
      );
      const reverseGeocode = await response.json();
      const address = reverseGeocode.results[0].formatted_address;
      console.log(address)
      navigation.navigate("Save-location", {address});
    })();
  };

  return (
    <>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <View style={styles.container}>
          <MapView
            initialRegion={initialRegion}
            onLongPress={handleSelectLocation}
            style={styles.map}
          >
            {location ? (
              <Marker
                title="Ubicacion seleccionada"
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
              />
            ) : null}
          </MapView>
          <Button
            title="Confirmar ubicacion"
            onPress={handleConfirm}
            style={styles.btnConfirm}
          />
        </View>
      )}
    </>
  );
};

export default SetLocationScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { height: "80%" },
  btnConfirm: {
    bottom: 150,
  },
});
