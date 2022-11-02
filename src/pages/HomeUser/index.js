import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
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
                Olá voluntário!
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
                            PontuacaoHora={item.PontuacaoHora}
                            DataEvento={item.DataEvento} />
                    </View>
                ))}
            </ListArea>
        </ScrollView>
    )
}