import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid, Dimensions, Alert, Text } from 'react-native';
import MapView from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-location';

const { width, height } = Dimensions.get("screen");

export default function Mapa() {

  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [region, setRegion] = useState(null);
  const [desitination, setDestination] = useState(null);

  useEffect(() => {
    getMyLocation()
  }, []);

  async function getMyLocation() {
    Location.getCurrentPositionAsync(info => {
      console.log("LAT", info.coords.latitude)
      console.log("LONG", info.coords.longitude)

      setLongitude({
        longiitude: info.coords.longitude,
        latitudeDelta: 0.00922
      })

      setLatitude({
        latitude: info.coords.latitude,
        longiitudeDelta: 0.00421
      })

      setRegion ({
        setLongitude,
        setLatitude
      })

    },
      () => { console.log("OPS :( Deu Ruim") }, {
      enableHighAccuracy: true,
      timeout: 2000
    })


  }
  return (
    <View style={styles.container}>
      <MapView
        onMapReady={() => {
          Platform.OS === 'android' ?
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
              .then(() => {
                console.log("Usuario Aceitou")
              })
            : ''
        }}
        initialRegion={region}
        style={{ width: width, height: height }}
        showsUserLocation={true}
        zoomEnabled={false}
        loadingEnabled={false}
      />


      <View style={styles.search}>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  search: {
    backgroundColor: '#ddd',

  }
})