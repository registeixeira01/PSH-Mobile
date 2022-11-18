import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native'
import { ListArea, TitleEventos } from './styled';
import CardOng from '../../../components/CardOng';
import { Button } from 'react-native';

export default function Home() {

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
            <View>
                <TitleEventos>
                    Olá ONG!
                </TitleEventos>
                <ListArea>
                     {eventos.map(item => ( 
                        <View key={item.Codigo}  >
                            <CardOng NomeEvento={item.NomeEvento}
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

           <Button style={styles.buttonMapa}
                onPress={() => navigation.navigate('Mapa')} title="mapa"/>
               
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
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        marginBottom: '3%',
        bottom: '8%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonMapa: {
      marginTop:1
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})