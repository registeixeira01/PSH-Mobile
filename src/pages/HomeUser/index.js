import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Icon } from '@rneui/themed';
import CardMessagem from '../../../components/CardMessagem';
import { ListArea, TitleEventos } from './styled';


export default function HomeUser() {

    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const subs = navigation.addListener('focus', () => {
            api.get('List').then(({ data }) => {
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
                    <View key={item.Codigo} >
                        <CardMessagem NomeEvento={item.NomeEvento}
                            Descricao={item.Descricao}
                            EnderecoEvento={item.EnderecoEvento}
                            NumeroEvento={item.NumeroEvento}
                            BairroEvento={item.BairroEvento}
                            CidadeEvento={item.CidadeEvento}
                            UfEvento={item.UfEvento}
                            DuracaoEvento={item.DuracaoEvento}
                            PontuacaoHora={item.PontuacaoHora} />
                    </View>
                ))}
            </ListArea>
        </ScrollView>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ddd'
//     },

//     text: {
//         fontSize: 25,
//     },
//     button: {
//         position: 'absolute',
//         backgroundColor: '#00FF7F',
//         borderRadius: 50,
//         paddingVertical: 8,
//         width: '60%',
//         alignSelf: 'center',
//         bottom: '15%',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     buttonText: {
//         fontSize: 18,
//         color: '#fff',
//         fontWeight: 'bold'
//     }
// })