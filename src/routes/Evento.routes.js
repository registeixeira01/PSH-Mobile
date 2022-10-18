import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { View, Text, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';


import CadEvento from '../pages/CadEvento'
import Ajudar from '../pages/Ajudar'
import Perfil from '../pages/Perfil'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from '../pages/Home';
import HomeUser from '../pages/HomeUser';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function EventoTabsRoutes() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {
                    backgroundColor: '#1E90FF',
                    Colors: '#000',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,

                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#ffff'

            })
            }
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="CadEvento"
                component={CadEvento}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Ajudar"
                component={Ajudar}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="help-with-circle" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export function EventoStackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="HomeUser"
                component={HomeUser}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="CadEvento"
                component={CadEvento}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
