import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScroolView
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import * as animatable from 'react-native-animatable'
import app from '../../../services/UsuarioServices';

export default function EntrarDoador() {
    const navigation = useNavigation();
    const [emailDoador, setEmailDoador] = useState("");
    const [password, setPassword] = useState("");

    const entrar = () => {

        let data = {
            emailDoador: emailDoador,
            password: password
        }

        app.loginDoador(data)
            .then((response) => {
                navigation.reset({
                    routes: [{ name: "InicioDoador" }]
                })
            })
            .catch((error) => {
                Alert.alert("Erro ao logar :(", "Usuario ou senha invalidos")
            })
    }

    return (
        
            <View style={styles.container}>
                <animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Olá você entrou como Doador!!!</Text>
                </animatable.View>

                <animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        onChangeText={text => setEmailDoador(text)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder="Senha"
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.button} onPress={() => entrar()}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("CadastroDoador")}>
                        <Text style={styles.textRegister}>Não possui uma conta? Cadastre-se</Text>
                    </TouchableOpacity>

                </animatable.View>
            </View>
            
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
        flex: 1,
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