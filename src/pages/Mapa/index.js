import React from 'react';
import { View,StyleSheet, Platform, PermissionsAndroid, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get("screen");
export default function Mapa() {
  return (
    <View style={styles.container}>
      <MapView
      onMapReady={{

      }}
      style={{width: width, height:height}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});