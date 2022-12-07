import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import api from '../../../services/api';
import { useNavigation } from '@react-navigation/native'
import { ListArea, TitleEventos } from './styled';
import CardOng from '../../../../components/CardOng';
import { Button } from 'react-native';
import * as animatable from 'react-native-animatable'
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

export default function InicioVoluntario() {

    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const subs = navigation.addListener('focus', () => {
            api.get('listar').then(({ data }) => {
                setEventos(data)
            });
        })

    }, [])

    return (
        <ScrollView >
            <View>
                {/* header */}
            <animatable.View style={styles.containerHeader}>
            <TouchableOpacity
                style={styles.buttonIcon}
                onPress= { () => navigation.reset({
                    routes: [{ name: "BemVindo" }]
                })}>
                <MaterialIcons name='exit-to-app' size={38} color='#000' shadowColor="#000" elevation={25} />
            </TouchableOpacity>
                <Text style={styles.title}>Inicio</Text>
            </animatable.View>

            {/* listas de cards */}
                <ListArea  style={styles.card}>
                     {eventos.map(item => (
                        <View key={item.Codigo}>
                            <CardOng  NomeEvento={item.NomeEvento}
                                OngResponsavel={item.OngResponsavel} />

                        </View>
                    ))}
                </ListArea>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CadEvento')}>
                <Text style={styles.buttonText}>Cadastrar novo evento</Text>
            </TouchableOpacity>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',

    },

    text: {
        fontSize: 25,
    },

    button: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
       flexDirection:'column',
        bottom: '20%',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'space-around',


    },
    buttonDois: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        marginBottom: '3%',
        bottom: '8%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonIcon: {
        margin: 10,
        alignItems: 'flex-end',
    },

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    card: {
        marginTop:50,
        marginBottom: 200
    },

    containerHeader: {
        backgroundColor: '#1E90FF',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height:110,
        flexDirection:'column',
        shadowColor: '#000',
        elevation:25

    },

    title: {
        marginLeft:10,
        fontSize: 30,
        fontWeight:'bold',
        color:'#fff'
    }
})