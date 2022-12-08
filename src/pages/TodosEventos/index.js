import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import app from '../../services/UsuarioServices';
import { useNavigation } from '@react-navigation/native'
import { ListArea, TitleEventos } from './styled';
import CardOng from '../../../components/CardOngDois';
import { Button } from 'react-native';
import * as animatable from 'react-native-animatable'
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

export default function TodosEventos() {

    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const subs = navigation.addListener('focus', () => {
            app.ExibirEventos().then(({ data }) => {
                setEventos(data)
            });
        })

    }, [])

    return (
        <ScrollView >
            <TouchableOpacity
                style={styles.buttonIcon}
                onPress={() => navigation.reset({
                    routes: [{ name: "BemVindo" }]
                })}>
                <MaterialIcons name='exit-to-app' size={38} color='#000' shadowColor="#000" elevation={25} />
            </TouchableOpacity>
            <TitleEventos>Todos Eventos</TitleEventos>
            {/* listas de cards */}
            <ListArea>
                {eventos.map(item => (
                    <View key={item.idEvento} >
                        <CardOng
                            idEvento={item.idEvento}
                            ongResponsavel={item.ongResponsavel}
                            nomeEvento={item.nomeEvento}
                            enderecoEvento={item.enderecoEvento}
                            numeroEvento={item.numeroEvento}
                            bairroEvento={item.bairroEvento}
                            cidadeEvento={item.cidadeEvento}
                            ufEvento={item.ufEvento}
                            horarioEvento={item.horarioEvento}
                            duracaoEvento={item.duracaoEvento}
                            pontuacao={item.pontuacao}
                            dataEvento={item.dataEvento} />
                    </View>
                ))}
            </ListArea>
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
        flexDirection: 'column',
        bottom: '20%',
        alignItems: 'center',
        alignSelf: 'center',
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
        marginTop: 50,
        marginBottom: 200
    },

    containerHeader: {
        marginTop: 20,
        marginBottom: 50,
    },

    title: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})