import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import app from '../../services/UsuarioServices';

export default function CadEvento({ navigation }) {
    const [nomeOng] = useState("");
    const [nomeEvento, setNomeEvento] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [horarioEvento, setHorarioEvento] = useState("");
    const [cepEvento, setCepEvento] = useState("");
    const [enderecoEvento, setEnderecoEvento] = useState("");
    const [numeroEvento, setNumeroEvento] = useState("");
    const [bairroEvento, setBairroEvento] = useState("");
    const [cidadeEvento, setCidadeEvento] = useState("");
    const [ufEvento, setUfEvento] = useState("");
    const [qtdVoluntarios, setQtdVoluntatrios] = useState("");
    const [duracaoEvento, setDuracaoEvento] = useState("");
    const [pontuacao, setPontuacao] = useState("");

    const cadastro = () => {
        let data = {
            nomeEvento: nomeEvento,
            dataEvento: dataEvento,
            horarioEvento: horarioEvento,
            cepEvento: cepEvento,
            enderecoEvento: enderecoEvento,
            numeroEvento: numeroEvento,
            bairroEvento: bairroEvento,
            cidadeEvento: cidadeEvento,
            ufEvento: ufEvento,
            qtdVoluntarios: qtdVoluntarios,
            duracaoEvento: duracaoEvento,
            pontuacao: pontuacao
        }

        app.CadastrarEventos(data)
            .then((response) => {
                Alert.alert(
                    "Informação",
                    "Evento criado com sucesso!")
                navigation.goBack();
            })
            .catch((error) => {
                console.log(error)
            })

    }


    return (
        <View style={styles.container}>


            <ScrollView >
                <View style={styles.container}>
                    <TextInput style={styles.inputEvento}
                        placeholder="Nome do Evento"
                        onChangeText={text => setNomeEvento(text)}
                        value={nomeEvento} />
                </View>

                <View style={styles.container}>

                    <TextInput style={styles.inputEvento}
                        placeholder="Data do evento"
                        keyboardType="numeric"
                        onChangeText={text => setDataEvento(text)}
                        value={dataEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Horário do evento"
                        onChangeText={text => setHorarioEvento(text)}
                        value={horarioEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="CEP do Evento"
                        keyboardType="numeric"
                        onChangeText={text => setCepEvento(text)}
                        value={cepEvento} />


                    <TextInput style={styles.inputEvento}
                        placeholder="Endereço do evento"
                        onChangeText={text => setEnderecoEvento(text)}
                        value={enderecoEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Nº"
                        keyboardType="numeric"
                        onChangeText={text => setNumeroEvento(text)}
                        value={numeroEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Bairro"
                        onChangeText={text => setBairroEvento(text)}
                        value={bairroEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Cidade"
                        onChangeText={text => setCidadeEvento(text)}
                        value={cidadeEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="UF"
                        onChangeText={text => setUfEvento(text)}
                        value={ufEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Quantidade de Voluntarios"
                        keyboardType="numeric"
                        onChangeText={text => setQtdVoluntatrios(text)}
                        value={qtdVoluntarios} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Duração do evento"
                        onChangeText={text => setDuracaoEvento(text)}
                        value={duracaoEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Pontuação"
                        keyboardType="numeric"
                        onChangeText={text => setPontuacao(text)}
                        value={pontuacao} />

                    <Button style={styles.btnCadastro} onPress={() => cadastro()} title="Salvar" ></Button>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:
    {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },

    btnCadastro:
    {
        backgroundColor: '#fff',
        fontSize: 19,
        marginBottom: 15,
        padding: 7,
        borderRadius: 8,
        width: 280,
        alignItems: 'center',
        alignSelf: 'center'
    },

    inputEvento:
    {
        borderRadius: 1,
        width: 350,
        border: 'solid 1px gray',
        margin: 0,
        outline: 'solid 1px silver',
        padding: 4,
        fontSize: 14,
        marginBottom: 10,
    },
});