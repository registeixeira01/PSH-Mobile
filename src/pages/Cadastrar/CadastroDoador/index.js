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
import app from '../../../services/UsuarioServices';
import { Icon } from '@rneui/base';

export default function CadastroDoador() {
    const navigation = useNavigation();
    const [nomeDoador, setNomeDoador] = useState("");
    const [emailDoador, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cepDoador, setCepDoador] = useState("");

    const cadastrar = () => {

        let data = {
            nomeDoador: nomeDoador,
            emailDoador: emailDoador,
            password: password,
           cepDoador: cepDoador
        }

        app.cadastroDoador(data)
            .then((response) => {
                Alert.alert("Bem vindo", "Doador cadastrado com sucesso!")
                navigation.reset({
                    routes: [{ name: "InicioVoluntario" }]
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
                    <Text style={styles.message}>Cadastre-se antes para começar a doar...</Text>
                </animatable.View>

                <animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Nome Completo</Text>
                    <TextInput
                        placeholder="Digite seu Nome Completo"
                        onChangeText={text => setNomeDoador(text)}
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

                    <Text style={styles.title}>Numero do CEP</Text>
                    <TextInput
                        placeholder="Digite seu Cep"
                        onChangeText={text => setCepDoador(text)}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => cadastrar()}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("EntrarDoador")}>
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