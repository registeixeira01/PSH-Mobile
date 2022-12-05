import React from 'react';
import reactDom from 'react-dom';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import * as animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function BemVindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>
                <Text style={styles.title}>Vamos começar!</Text>
                <Text style={styles.text}>Selecione como você vai ajudar:</Text>

                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('EntrarDoador')}
                >
                    <Text style={styles.buttonText}>Doador</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonDois}
                onPress={ () => navigation.navigate('EntrarVoluntario')}
                >
                    <Text style={styles.buttonText}>Voluntario</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonTres}
                onPress={ () => navigation.navigate('EntrarOng')}
                >
                    <Text style={styles.buttonText}>Ong</Text>
                </TouchableOpacity>

            </animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForms: {
        flex: 2,
        backgroundColor: '#1E90FF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '15%',
        paddingEnd: '5%',
        flexDirection:'column'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#ffff'
    },
    text: {
        color: '#fff',
        marginVertical: 8,
        fontSize:17
    },
    button: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 10,
        width: '50%',
       flexDirection:'column',
        bottom: '50%',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'space-around',
        marginTop:5
        
    },
    buttonDois: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 10,
        width: '50%',
       flexDirection:'column',
        bottom: '35%',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'space-around',
        marginTop:5
        
    },
    buttonTres: {
        position: 'absolute',
        backgroundColor: '#00FF7F',
        borderRadius: 50,
        paddingVertical: 10,
        width: '50%',
       flexDirection:'column',
        bottom: '20%',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'space-around',
        marginTop:5
        
    },
    

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    
})

