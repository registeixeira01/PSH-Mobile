import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// icones
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

// pages
import InicioVoluntario from '../pages/Home/InicioVoluntario'
import InicioDoador from '../pages/Home/InicioDoador'
import InicioOng from '../pages/Home/InicioOng'
import CadEvento from '../pages/CadEvento'
import EventoVoluntario from '../pages/EventoVoluntario'
import TodosEventos from '../pages/TodosEventos'
import BemVindo from '../pages/BemVindo'
import EntrarDoador from '../pages/Entrar/EntrarDoador';
import EntrarVoluntario from '../pages/Entrar/EntrarVoluntario'
import EntrarOng from '../pages/Entrar/EntrarOng'
import VoluntarioEvento from '../pages/VoluntarioEvento';
import CadastroVoluntario from '../pages/Cadastrar/CadastroVoluntario';
import CadastroDoador from '../pages/Cadastrar/CadastroDoador';
import CadastroOng from '../pages/Cadastrar/CadastroOng';
import EventosVoluntarios from '../pages/EventoVoluntario';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function VoluntarioTab() {
    return (
        <Tab.Navigator
            screenOptions={({ Routes }) => ({
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
                name="Inicio"
                component={InicioVoluntario}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ), headerShown: false
                }}
            />

            <Tab.Screen
                name="Eventos"
                component={EventoVoluntario}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="event-available" size={24} color="black" />
                    ), headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export function DoadorTab() {
    return (
        <Tab.Navigator
            screenOptions={({ Routes }) => ({
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
                name="Inicio"
                component={InicioDoador}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ), headerShown: false
                }}
            />
            <Tab.Screen
                name="Eventos"
                component={TodosEventos}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="event-available" size={24} color="black" />
                    ), headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export function OngTab() {
    return (
        <Tab.Navigator
            screenOptions={({ Routes }) => ({
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
                name="Inicio"
                component={InicioOng}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ), headerShown: false
                }}
            />
            <Tab.Screen
                name="CadEvento"
                component={CadEvento}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="event" size={size} color="black" />
                    ), title: 'Novo Evento',
                    headerTitleAlign: 'center'
                }}
            />

            <Tab.Screen
                name="Eventos"
                component={TodosEventos}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="event-available" size={24} color="black" />
                    ), headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}
export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EntrarDoador"
                component={EntrarDoador}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EntrarVoluntario"
                component={EntrarVoluntario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EntrarOng"
                component={EntrarOng}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroDoador"
                component={CadastroDoador}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroVoluntario"
                component={CadastroVoluntario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroOng"
                component={CadastroOng}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="InicioVoluntario"
                component={VoluntarioTab}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="InicioDoador"
                component={DoadorTab}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="InicioOng"
                component={OngTab}
                options={{ headerShown: false }} />

            <Stack.Screen
                name="Voluntario"
                component={VoluntarioEvento}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="CadEvento"
                component={CadEvento}
                options={{
                    title: 'Cadastrar Novo Evento',
                    headerTitleAlign: 'center'
                }} />

        </Stack.Navigator>
    )
}