import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar headerTransparent='true' barStyle = 'light-content'/>
        <Routes/>
    </NavigationContainer>
  );
}