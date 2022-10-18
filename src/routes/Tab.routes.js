import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Feather } from '@expo/vector-icons';
import CadEvento from '../pages/CadEvento'
import Ajudar from '../pages/Ajudar'
import Perfil from '../pages/Perfil'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from '../pages/Home';
import HomeUser from '../pages/HomeUser';

const { Screen, Navigator } = createBottomTabNavigator();


export function TabRoutes() {
    return (
        <Navigator>
            <Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />

            <Screen
                name="HomeUser"
                component={HomeUser}
                options={{ headerShown: false }} />

            <Screen
                name="CadEvento"
                component={CadEvento}
                options={{ headerShown: false }} />
        </Navigator>
    )
}