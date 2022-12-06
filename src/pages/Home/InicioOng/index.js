import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import api from '../../../services/api';
import { useNavigation } from '@react-navigation/native'
import { ListArea, TitleEventos } from './styled';
import CardOng from '../../../../components/CardOng';
import CardMessagem from '../../../../components/CardMessagem';
import { Button } from 'react-native';
import * as animatable from 'react-native-animatable'
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';
import app from '../../../services/UsuarioServices';

export default function InicioOng() {

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
            <TitleEventos>
                Olá usuário!
            </TitleEventos>
            <ListArea>
                {eventos.map(item => (
                    <View key={item.idEvento} >
                        <CardMessagem nomeEvento={item.nomeEvento}
                            enderecoEvento={item.enderecoEvento}
                            numeroEvento={item.numeroEvento}
                            bairroEvento={item.bairroEvento}
                            cidadeEvento={item.cidadeEvento}
                            ufEvento={item.ufEvento}
                            duracaoEvento={item.duracaoEvento}
                            pontuacao={item.pontuacao} />
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