import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function CadEvento({ navigation }) {
    const [nomeEvento, setNomeEvento] = useState("");
    const [ongResponsavel, setOngResponsavel] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [enderecoEvento, setEnderecoEvento] = useState("");
    const [numeroEvento, setNumeroEvento] = useState("");
    const [bairroEvento, setBairroEvento] = useState("");
    const [cidadeEvento, setCidadeEvento] = useState("");
    const [ufEvento, setUfEvento] = useState("");
    const [duracaoEvento, setDuracaoEvento] = useState("");
    const [pontuacaoHora, setPontuacaoHora] = useState("");
    const [horarioEvento, setHorarioEvento] = useState("");

    function cadastro() {
        try {
            const response = api.post('Create',
                {
                    NomeEvento: nomeEvento,
                    OngResponsavel: ongResponsavel,
                    Descricao: descricao,
                    DataEvento: dataEvento,
                    EnderecoEvento: enderecoEvento,
                    NumeroEvento: numeroEvento,
                    BairroEvento: bairroEvento,
                    CidadeEvento: cidadeEvento,
                    UfEvento: ufEvento,
                    DuracaoEvento: duracaoEvento,
                    PontuacaoHora: pontuacaoHora,
                    HorarioEvento: horarioEvento
                });

            setNomeEvento(""),
                setOngResponsavel(""),
                setDescricao(""),
                setDataEvento(""),
                setEnderecoEvento(""),
                setNumeroEvento(""),
                setBairroEvento(""),
                setCidadeEvento,
                setUfEvento(""),
                setDuracaoEvento(""),
                setPontuacaoHora(""),
                setHorarioEvento("");

                Alert.alert(
                    "Informação",
                    "Evento criado com sucesso!")
            navigation.goBack();

        } catch (error) {

        }
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
                        placeholder="Ong Responsavel"
                        onChangeText={text => setOngResponsavel(text)}
                        value={ongResponsavel} />
                </View>

                <View style={styles.container}>
                    <TextInput style={styles.inputEvento}
                        placeholder="Descriçao do evento"
                        onChangeText={text => setDescricao(text)}
                        value={descricao} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Data do evento"
                        keyboardType="numeric"
                        onChangeText={text => setDataEvento(text)}
                        value={dataEvento} />

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
                        placeholder="Duração do evento"
                        keyboardType="numeric"
                        onChangeText={text => setDuracaoEvento(text)}
                        value={duracaoEvento} />

                    <TextInput style={styles.inputEvento}
                        placeholder="Pontuação por hora"
                        keyboardType="numeric"
                        onChangeText={text => setPontuacaoHora(text)}
                        value={pontuacaoHora} />


                    <TextInput style={styles.inputEvento}
                        placeholder="Horário do evento"
                        keyboardType="numeric"
                        onChangeText={text => setHorarioEvento(text)}
                        value={horarioEvento} />

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