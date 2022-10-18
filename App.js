
// import { Routes } from './src/routes';
// import Welcome, { } from './src/pages/Welcome'

// export default function App() {
//   return (
//         <Routes/>
//   );
// }

import React from 'react';
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'



export default function App() {
  return (
    <NavigationContainer>
        <StatusBar headerTransparent='true' barStyle = 'light-content'/>
        <Routes/>
    </NavigationContainer>
  );
}