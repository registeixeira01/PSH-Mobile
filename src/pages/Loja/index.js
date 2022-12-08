import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as animatable from 'react-native-animatable';
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
    background-color: #1E90FF;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;

const CadButton = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    background-color: #00FF7F;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

const CadButtonText = styled.Text`
    font-size: 20px;
    color: #ffff;
    font-weight: bold;
`;

const InfoArea = styled.View`
    justify-content: space-between;
`;

const TextArea = styled.View`
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #FFFF;
`;

const TitleMessage = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
    justify-content: space-between;
    font-weight: bold;
    color: #ffff;
`;

const Infos = styled.Text`
    font-size: 15px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 3px;
    justify-content: space-between;
    font-weight: lighter;
`;

const ImageEvent = styled.Image`
    width: 320px;
    height: 200px;
`;

export default function Loja() {
    const navigation = useNavigation();
    const showAlert = () =>
        Alert.alert(
            "Atenção",
            "Você resgatou",
            [
                {
                    text: "Cancelar",
                    onPress: () => Alert.alert("Resgate cancelada", "Sua inscrição foi cancelada"),
                    style: "cancel",
                },
                {
                    text: "Confirmar",
                    onPress: () => navigation.navigate('InicioVoluntario'),
                    style: "cancel",
                }
            ],
        );
    return (
        <View>
            {/* header */}
            <animatable.View style={styles.containerHeader}>
                <TouchableOpacity
                    style={styles.buttonIcon}
                    onPress={() => navigation.reset({
                        routes: [{ name: "BemVindo" }]
                    })}>
                    <MaterialIcons name='exit-to-app' size={38} color='#000' shadowColor="#000" elevation={25} />
                </TouchableOpacity>
                <Text style={styles.title}>Loja</Text>
            </animatable.View>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    flexDirection: 'row',
                    fexWrap: 'wrap',
                    marginTop: 200
                }}
            >

                <Area>
                    <InfoArea>
                        <TitleMessage >Nike</TitleMessage>
                        <TextArea>
                            {/* <ImageEvent
                                source={require('src/')}
                            /> */}
                            <Text style={{ margin: 10, marginRight: 150 }}>Pontos nescessario: 1000</Text>

                        </TextArea>
                        <CadButton onPress={() => showAlert()}>
                            <CadButtonText> Resgatar </CadButtonText>
                        </CadButton>
                    </InfoArea>

                </Area>

                <Area>
                    <InfoArea>
                        <TitleMessage >Aliexpress</TitleMessage>
                        <TextArea>

                            <Text style={{ margin: 10, marginRight: 150 }}>Pontos nescessario: 1000</Text>

                        </TextArea>
                        <CadButton onPress={() => showAlert()}>
                            <CadButtonText> Resgatar </CadButtonText>
                        </CadButton>
                    </InfoArea>

                </Area>

                <Area>
                    <InfoArea>
                        <TitleMessage >Burguer King</TitleMessage>
                        <TextArea>

                            <Text style={{ margin: 10, marginRight: 150 }}>Pontos nescessario: 1000</Text>

                        </TextArea>
                        <CadButton onPress={() => showAlert()}>
                            <CadButtonText> Resgatar </CadButtonText>
                        </CadButton>
                    </InfoArea>

                </Area>

                <Area>
                    <InfoArea>
                        <TitleMessage >Shopee</TitleMessage>
                        <TextArea>

                            <Text style={{ margin: 10, marginRight: 150 }}>Pontos nescessario: 1000</Text>

                        </TextArea>
                        <CadButton onPress={() => showAlert()}>
                            <CadButtonText> Resgatar </CadButtonText>
                        </CadButton>
                    </InfoArea>

                </Area>





            </ScrollView>
        </View>

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
        paddingVertical: 10,
        width: '60%',
        flexDirection: 'column',
        bottom: '20%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',


    },
    buttonDois: {
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

    buttonIcon: {
        margin: 10,
        alignItems: 'flex-end',
    },

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    card: {
        marginTop: 50,
        marginBottom: 200
    },

    containerHeader: {
        backgroundColor: '#1E90FF',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 110,
        flexDirection: 'column',
        shadowColor: '#000',
        elevation: 25

    },

    title: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})