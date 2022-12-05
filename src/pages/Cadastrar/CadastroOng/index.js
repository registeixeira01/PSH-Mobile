import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as animatable from 'react-native-animatable'
import { Header } from 'react-native/Libraries/NewAppScreen';
import api from '../../../services/api';
import usuarioService from '../../../services/UsuarioServices';
import app from '../../../services/UsuarioServices';

export default function CadastroOng() {
    const navigation = useNavigation();
    const [nomeOng, setName] = useState("");
    const [emailOng, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnpjOng, setCnpj] = useState("");
    const [cepOng, setCep] = useState("");
    const [enderecoOng, setEndereco] = useState("");
    const [numeroOng, setNumero] = useState("");
    const [bairroOng, setBairro] = useState("");
    const [cidadeOng, setCidade] = useState("");
    const [ufOng, setUf] = useState("");

    const cadastro = () => {

        let data = {
            nomeOng: nomeOng,
            emailOng: emailOng,
            password: password,
            cnpjOng: cnpjOng,
            cepOng: cepOng,
            enderecoOng: enderecoOng,
            numeroOng: numeroOng,
            bairroOng: bairroOng,
            cidadeOng: cidadeOng,
            ufOng: ufOng
        }

        app.cadastroOng(data)
            .then((response) => {
                Alert.alert("Bem vindo", "Ong cadastrada com sucesso!")
                navigation.reset({
                    routes: [{ name: "InicioOng" }]
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Cadastre-se antes de começar</Text>
                </animatable.View>

                <animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Nome Completo</Text>
                    <TextInput
                        placeholder="Digite seu Nome Completo"
                        onChangeText={text => setName(text)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder="Senha"
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry={true}
                    />

                    <Text style={styles.title}>CNPJ</Text>
                    <TextInput
                        placeholder="CNPJ"
                        onChangeText={text => setCnpj(text)}
                        style={styles.input}
                        
                    />

                    <Text style={styles.title}>CEP</Text>
                    <TextInput
                        placeholder="CEP"
                        onChangeText={text => setCep(text)}
                        style={styles.input}
                        
                    />

                    <Text style={styles.title}>Endereço</Text>
                    <TextInput
                        placeholder="Endereço"
                        onChangeText={text => setEndereco(text)}
                        style={styles.input}
                        
                    />

                    <Text style={styles.title}>Numero</Text>
                    <TextInput
                        placeholder="Numero"
                        onChangeText={text => setNumero(text)}
                        style={styles.input}
                        
                    />

                    <Text style={styles.title}>Bairro</Text>
                    <TextInput
                        placeholder="Bairro"
                        onChangeText={text => setBairro(text)}
                        style={styles.input}
                        
                    />

                    <Text style={styles.title}>Cidade</Text>
                    <TextInput
                        placeholder="Cidade"
                        onChangeText={text => setCidade(text)}
                        style={styles.input}
                        
                    />

                    <Text style={styles.title}>UF</Text>
                    <TextInput
                        placeholder="UF"
                        onChangeText={text => setUf(text)}
                        style={styles.input}
                       
                    />

                    <TouchableOpacity style={styles.button} onPress={() => cadastro()}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("EntrarOng")}>
                        <Text style={styles.textRegister}>Ja possui uma conta? Entre</Text>
                    </TouchableOpacity>

                </animatable.View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E90FF',
    },
    containerHeader: {
        marginTop: '24%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'

    },
    containerForm: {
        backgroundColor: '#fff',
        paddingBottom: '60%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'

    },
    title: {
        fontSize: 20,
        marginTop: 28,
        color: '#1E90FF'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1E90FF',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    textRegister: {
        color: '#1E90FF'
    }


})