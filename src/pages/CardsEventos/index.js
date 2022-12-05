import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import CardMessagem from '../../../components/CardMessagem';
import { ListArea, TitleEventos } from './styled';
import app from '../../services/UsuarioServices';


export default function CardsEventos() {

    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const subs = navigation.addListener('focus', () => {
            app.ListarEventos('ListarEventos').then(({ data }) => {
                setEventos(data)
            });
        })

    }, [])

    return (
        <ScrollView >
            <TitleEventos>
                Olá voluntário!
            </TitleEventos>
            <ListArea>
                {eventos.map(item => (
                    <View key={item.Codigo} >
                        <CardMessagem  NomeEvento={app.nomeEvento}
                            Descricao={item.Descricao}
                            EnderecoEvento={item.EnderecoEvento}
                            NumeroEvento={item.NumeroEvento}
                            BairroEvento={item.BairroEvento}
                            CidadeEvento={item.CidadeEvento}
                            UfEvento={item.UfEvento}
                            DuracaoEvento={item.DuracaoEvento}
                            PontuacaoHora={item.PontuacaoHora}
                            DataEvento={item.DataEvento} />
                    </View>
                ))}
            </ListArea>
        </ScrollView>
    )
}

